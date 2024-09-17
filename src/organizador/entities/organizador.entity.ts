import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

@Schema()
export class Organizador extends Document {
    /* @Prop()
    id_organizador:string; */

    @Prop()
    nombre:string;

    @Prop()
    apellidos:string;

    @Prop()
    empresa:string;

    @Prop()
    dni:string;

    @Prop()
    Celular:string;
    
    @Prop()
    Password:string;
    
    @Prop()
    ubicacion:string;

}
export const OrganizadorSchema = SchemaFactory.createForClass(Organizador);

