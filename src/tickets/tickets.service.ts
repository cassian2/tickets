import { BadRequestException, Injectable } from '@nestjs/common';
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
      return ticket;
    }catch(error){
      return error.message.toJSON();
    }
  }
  async picar(id: string, updateTicketDto: UpdateTicketDto) {
    
    const Ticket= await this.ticketModel.findOne({uuid:id})
    updateTicketDto.usados=(parseInt(Ticket.usados)+1).toString();
    await Ticket.updateOne(updateTicketDto,{new:true })

    return {...Ticket.toJSON(),...updateTicketDto};
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
