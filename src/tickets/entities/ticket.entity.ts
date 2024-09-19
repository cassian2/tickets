import { Prop,Schema as MongooseSchema, SchemaFactory } from "@nestjs/mongoose";
import {Schema, Document} from "mongoose";
import { Evento } from "src/evento/entities/evento.entity";

@MongooseSchema()
export class Ticket extends Document {
    @Prop()
    uuid:string;

    @Prop()
    nombres:string;

    @Prop()
    apellidos:string;

    @Prop({ type: Schema.Types.ObjectId, ref: 'Evento', required: true })
    evento:Evento|string;

    @Prop()
    cantidad:string;

    @Prop()
    usados:string;

    @Prop()
    dni:string;

}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
