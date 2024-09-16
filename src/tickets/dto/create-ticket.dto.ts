import { IsEmail, isInt, IsNumberString, IsString,Length, MaxLength, MinLength } from "class-validator";

export class CreateTicketDto {
    @IsNumberString()
    @MinLength(5)
    id_ticket:Int16Array;

    @MinLength(4)
    @MaxLength(30)
    nombres:string;

    @MinLength(4)
    @MaxLength(30)
    apellidos:string;

    @IsNumberString()
    @Length(8)
    id_evento:string;

    @IsNumberString()
    @MinLength(5)
    cantidad:Int8Array;

    @IsNumberString()
    @MinLength(5)
    usados:Int8Array;

    @IsNumberString()
    @Length(8)
    dni:Int8Array;
}
