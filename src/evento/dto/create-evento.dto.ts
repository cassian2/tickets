import { IsDate, isDate, isDateString, IsEmail, isInt, IsNumberString, IsString,IsUUID,isUUID,Length, MaxLength, MinLength } from "class-validator";
export class CreateEventoDto {
    @IsNumberString()
    @MinLength(5)
    id_evento:string;

    @MinLength(4)
    @MaxLength(30)
    tipo:string;

    @IsDate()
    feha:Date;

    @IsUUID()
    id_admin:string;

    @IsString()
    ubicacion:string;

    @IsUUID()
    id_eventista:string;

    @IsNumberString()
    nroboletos:String;
    
}
