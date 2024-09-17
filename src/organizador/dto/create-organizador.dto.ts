import { IsEmail, isInt, IsNumberString, IsString,Length, MaxLength, MinLength } from "class-validator";


export class CreateOrganizadorDto {
    /* @IsNumberString()
    @MinLength(5)
    id_organizador :Int16Array;
 */
    @MinLength(4)
    @MaxLength(30)
    nombre:string;

    @MinLength(4)
    @MaxLength(30)
    apellidos:string;

    @MinLength(4)
    @MaxLength(30)
    empresa:string;

    @IsNumberString()
    @Length(8)
    dni:string;

    @MinLength(4)
    @MaxLength(30)
    ubicacion:string;

    @IsNumberString()
    celular:string;
    
    @MinLength(8)
    @MaxLength(20)
    password:string;
}
