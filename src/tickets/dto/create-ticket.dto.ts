import { IsEmail, isInt, IsMongoId, IsNumberString, IsString,Length, MaxLength, MinLength } from "class-validator";

export class CreateTicketDto {
    
    uuid:string;

    @MinLength(4)
    @MaxLength(30)
    nombres:string;

    @MinLength(4)
    @MaxLength(30)
    apellidos:string;

    @IsMongoId()
    evento:string;

    @IsNumberString()
    @MinLength(1)
    cantidad:string;


    usados:string;

    @IsNumberString()
    @Length(8)
    dni:string;
}
