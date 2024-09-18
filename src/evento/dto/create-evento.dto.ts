import { IsDate, isDate, IsDateString, isDateString, IsEmail, isInt, IsMongoId, IsNumberString, isString, IsString,IsUUID,isUUID,Length, MaxLength, MinLength } from "class-validator";
export class CreateEventoDto {
    
    @MinLength(4)
    @MaxLength(30)
    tipo:string;

    @IsString()
    fecha:string;

    @IsMongoId()
    admin:string;

    @IsString()
    ubicacion:string;

    @IsMongoId()
    organizador:string;

    @IsNumberString()
    nroboletos:String;
    
}
