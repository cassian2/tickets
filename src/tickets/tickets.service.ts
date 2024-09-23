import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './entities/ticket.entity';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { ErrorManager } from 'src/utils/error.manager';

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

  async findAll(id:string) {
    let tickets:Ticket[];
    try {
      tickets=await this.ticketModel.find({evento:id})
      if (tickets.length===0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:`Tickets del usuario  ${id} no encontrado`
        })
    }
      return tickets;
    }catch(error){
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: string):Promise<Ticket> {
    let ticket:Ticket;
    
    try {
      ticket=await this.ticketModel.findOne({_id:id})
      if (!ticket) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message:`Ticket ${id} no encontrado`
        })
    }
      return ticket;
    }catch(error){
      throw ErrorManager.createSignatureError(error.message)
    }
  }
  async picar(id: string) {
    try{
    let Ticket= await this.ticketModel.findOne({uuid:id})
    if (!Ticket) {
      throw new ErrorManager({
        type:'BAD_REQUEST',
        message:`Ticket ${id} no encontrado`
      })
    }
    if (parseInt(Ticket.usados)>=parseInt(Ticket.cantidad)) {
      throw new ErrorManager({
        type:'BAD_REQUEST',
        message:`Ticket ${id} usado`
      })
    }
    Ticket.usados=(parseInt(Ticket.usados)+1).toString();
    await Ticket.save()
    return Ticket;
    }
    catch(error){
      throw ErrorManager.createSignatureError(error.message)
    }
   
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const Ticket= await this.findOne(id);
    await Ticket.updateOne(updateTicketDto,{new:true })

    return {...Ticket.toJSON(),...updateTicketDto};
  }

  async remove(id: string) {
    const Ticket= await this.findOne(id);
    try {
      await this.ticketModel.deleteOne({_id:Ticket._id})
      throw new ErrorManager({
        type:'ACCEPTED',
        message:`Ticket${
          Ticket._id
        } Eliminado`
      })
    }catch(error){
      throw ErrorManager.createSignatureError(error.message)
    }
  }
}
