import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrganizadorDto } from './dto/create-organizador.dto';
import { UpdateOrganizadorDto } from './dto/update-organizador.dto';
import { Organizador } from './entities/organizador.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrganizadorService {
  constructor(
    @InjectModel(Organizador.name)
    private readonly organizadorModel:Model<Organizador>
  ){}
  async create(createOrganizadorDto: CreateOrganizadorDto) {
    
    createOrganizadorDto.nombre=createOrganizadorDto.nombre.toLowerCase();
    createOrganizadorDto.apellidos=createOrganizadorDto.apellidos.toLowerCase();
    createOrganizadorDto.ubicacion=createOrganizadorDto.ubicacion.toLocaleLowerCase();
    createOrganizadorDto.empresa=createOrganizadorDto.empresa.toLocaleLowerCase();
    try {
      const Organizador=await this.organizadorModel.create(createOrganizadorDto);

      return Organizador;
      
    } catch (error) {
      
        throw new BadRequestException(error)
      
      
    }
  }

  findAll() {
    return `This action returns all organizador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organizador`;
  }

  update(id: number, updateOrganizadorDto: UpdateOrganizadorDto) {
    return `This action updates a #${id} organizador`;
  }

  remove(id: number) {
    return `This action removes a #${id} organizador`;
  }
}
