import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { User } from "src/modules/users/entities/user.entity";

export class LoginAuthDto implements User{
    id: number;
    name: string;
    mail: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password: string;
}