
import { IsEmail, isInt, IsNumberString, IsString,Length, MaxLength, MinLength } from "class-validator";


export class CreateAdminDto {
    @IsNumberString()
    @MinLength(5)
    id_admin:Int16Array;

    @MinLength(4)
    @MaxLength(30)
    nombre:string;

    @MinLength(4)
    @MaxLength(30)
    apellidos:string;

    @IsNumberString()
    @Length(8)
    dni:string;

    @IsNumberString()
    Celular:string;
    
    @MinLength(8)
    @MaxLength(10)
    Password:string;
    
}