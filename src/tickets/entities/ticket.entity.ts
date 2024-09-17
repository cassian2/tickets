import { Prop,Schema as MongooseSchema, SchemaFactory } from "@nestjs/mongoose";
import {Schema, Document} from "mongoose";
import { Evento } from "src/evento/entities/evento.entity";

@MongooseSchema()
export class Ticket extends Document {
    @Prop()
    id_ticket:string;

    @Prop()
    nombres:string;

    @Prop()
    apellidos:string;

    @Prop({ type: Schema.Types.ObjectId, ref: 'Evento', required: true })
    id_evento:Evento|string;

    @Prop()
    cantidad:string;

    @Prop()
    usados:string;

    @Prop()
    dni:string;

}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
