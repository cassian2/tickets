import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

@Schema()
export class Admin extends Document {
    @Prop()
    id_admin:Int16Array;

    @Prop()
    nombre:string;

    @Prop()
    apellidos:string;

    @Prop({
        unique:true,
        index:true,
    })
    dni:string;

    @Prop()
    Celular:string;
    
    @Prop()
    Password:string;

}
export const AdministradorSchema = SchemaFactory.createForClass(Admin);