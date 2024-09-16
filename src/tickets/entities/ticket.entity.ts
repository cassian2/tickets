import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import { Evento } from "src/evento/entities/evento.entity";


@Schema()
export class Ticket extends Document {
    @Prop()
    id_ticket:Int16Array;

    @Prop()
    nombres:string;

    @Prop()
    apellidos:string;

    @Prop({ type: Schema.Types.ObjectId, ref: 'Evento', required: true })
    id_evento:Evento|string;

    @Prop()
    cantidad:Int8Array;

    @Prop()
    usados:Int8Array;

    @Prop()
    dni:Int8Array;

}
export const TicketSchema = SchemaFactory.createForClass(Ticket);
