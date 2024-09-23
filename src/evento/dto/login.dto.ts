
import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsInt, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";

export class LoginDto  {
    @MinLength(0)
    dni:string;
    @MinLength(4)
    @MaxLength(16)
    password:string;
    
}