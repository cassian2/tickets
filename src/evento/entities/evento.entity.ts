import { Prop,Schema as MongooseSchema, SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema} from "mongoose";
import { Admin } from "src/admin/entities/admin.entity";
import { Organizador } from "src/organizador/entities/organizador.entity";

@MongooseSchema()
export class Evento extends Document {
    @Prop()
    tipo:string;

    @Prop()
    fecha:string;

    @Prop({ type: Schema.Types.ObjectId, ref: 'Admin', required: true })
    admin:Admin;

    @Prop()
    ubicacion:string;

    @Prop({ type: Schema.Types.ObjectId, ref: 'Organizador', required: true })
    organizador:Organizador;

    @Prop()
    nroboletos:string;
}
export const EventoSchema = SchemaFactory.createForClass(Evento);
