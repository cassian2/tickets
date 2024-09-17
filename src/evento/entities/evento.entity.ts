import { Prop,Schema as MongooseSchema, SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema} from "mongoose";

@MongooseSchema()
export class Evento extends Document {
    @Prop()
    id_evento:string;

    @Prop()
    tipo:string;

    @Prop()
    feha:Date;

    @Prop()
    id_admin:string;

    @Prop()
    ubicacion:string;

    @Prop()
    id_eventista:string;

    @Prop()
    nroboletos:string;
}
export const EventoSchema = SchemaFactory.createForClass(Evento);
