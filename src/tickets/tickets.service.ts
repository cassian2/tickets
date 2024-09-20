import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './entities/ticket.entity';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { json } from 'express';

@Injectable()
export class TicketsService {
  constructor(
  @InjectModel(Ticket.name)
    private readonly ticketModel:Model<Ticket>
  ){}
  async create(createTicketDto: CreateTicketDto) {
    createTicketDto.uuid=uuidv4();
    createTicketDto.usados="0";
    try {
      const Organizador=await this.ticketModel.create(createTicketDto);

      return Organizador;
      
    } catch (error) {
      
        throw new BadRequestException(error)
      
      
    }
  }

  findAll() {
    return `This action returns all tickets`;
  }

  async findOne(id: string) {
    let ticket:Ticket;
    
    try {
      ticket=await this.ticketModel.findOne({_id:id})
      if (!ticket) {
        throw new NotFoundException(`Producto con ID #${id} no encontrado.`);
    }
      return ticket;
    }catch(error){
      return error
    }
  }
  async picar(id: string) {
    try{
    let Ticket= await this.ticketModel.findOne({uuid:id})
    if (!Ticket) {
      throw new NotFoundException(`Producto con ID #${id} no encontrado.`);
    }
    Ticket.usados=(parseInt(Ticket.usados)+1).toString();
    await Ticket.save()
    return Ticket;
    }
    catch(error){
      return error.message.toJSON();
    }
   
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const Ticket= await this.findOne(id);
    await Ticket.updateOne(updateTicketDto,{new:true })

    return {...Ticket.toJSON(),...updateTicketDto};
  }

  remove(id: string) {
    return `This action removes a #${id} ticket`;
  }
}
