import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectModel(Evento.name)
    private readonly adminModel:Model<Evento>
  ){}
  async create(createEventoDto: CreateEventoDto) {
    
    try {
      const admin=await this.adminModel.create(createEventoDto);

      return admin;
      
    } catch (error) {
      
        throw new BadRequestException(error)
      
      
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
