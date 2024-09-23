import { Prop,Schema as MongooseSchema, SchemaFactory } from "@nestjs/mongoose";
import {Schema, Document} from "mongoose";
import { Evento } from "src/evento/entities/evento.entity";

@MongooseSchema()
export class Ticket extends Document {
    @Prop()
    uuid:string;

    @Prop({required:true})
    nombres:string;

    @Prop({required:true})
    apellidos:string;

    @Prop({ type: Schema.Types.ObjectId, ref: 'Evento', required: true })
    evento:Evento|string;

    @Prop({required:true})
    cantidad:string;

    @Prop({required:true})
    usados:string;

    @Prop({unique:true ,required:true})
    dni:string;

}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
