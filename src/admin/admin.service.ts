import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './entities/admin.entity';
import { LoginDto } from './dto/login.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel:Model<Admin>
  ){}
  async create(createAdminDto: CreateAdminDto) {
    createAdminDto.nombre=createAdminDto.nombre.toLowerCase();
    createAdminDto.apellidos=createAdminDto.apellidos.toLowerCase();
    createAdminDto.dni=createAdminDto.dni;
    createAdminDto.celular=createAdminDto.celular;
    try {
      const admin=await this.adminModel.create(createAdminDto);

      return admin;
      
    } catch (error) {
      
        throw new BadRequestException(error)
      
      
    }
  }

  findAll() {
    return `This action returns all admin`;
  }
  async login(logindto:LoginDto){
  
    
    try {
      logindto=await this.adminModel.findOne({dni:logindto.dni,password:logindto.password})
      if (!logindto) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:`Usuario o contraseña incorrecto`
        })
    }
    
      return logindto;
    }catch(error){
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
