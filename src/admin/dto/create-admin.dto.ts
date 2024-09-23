
import { IsEmail, isInt, IsNumberString, IsString,Length, MaxLength, MinLength } from "class-validator";


export class CreateAdminDto {
    

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
    celular:string;
    
    @MinLength(8)
    @MaxLength(20)
    password:string;
    
}