import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { User } from "../interfaces/user.interfac";
//import { ApiProperty } from "@nestjs/swagger";
export class LoginAuthDto implements User{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password: string;
}