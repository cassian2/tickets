import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

@Schema()
export class Admin extends Document {
    
    @Prop()
    nombre:string;

    @Prop()
    apellidos:string;

    @Prop()
    dni:string;

    @Prop()
    Celular:string;
    
    @Prop()
    Password:string;

}
export const AdminSchema = SchemaFactory.createForClass(Admin);