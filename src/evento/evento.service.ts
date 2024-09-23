import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evento } from './entities/evento.entity';
import { LoginDto } from './dto/login.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class EventoService {
  constructor(
    @InjectModel(Evento.name)
    private readonly eventoModel:Model<Evento>
  ){}
  async create(createEventoDto: CreateEventoDto) {
    
    try {
      const admin=await this.eventoModel.create(createEventoDto);

      return admin;
      
    } catch (error) {
      
        throw new BadRequestException(error)
      
      
    }
  }
  async login(logindto:LoginDto){
  
    
    try {
      const eventoLogin=await this.eventoModel.find({}).populate({
        path: 'admin',
        match: { dni: logindto.dni,password:logindto.password },  // Solo incluirá los autores que coincidan
    })
    const filterevento=eventoLogin.filter(evento=>evento.admin)
      if (filterevento.length===0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:`Usuario o contraseña incorrecto`
        })
    }
    
      return filterevento;
    }catch(error){
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  findAll() {
    return `This action returns all evento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
