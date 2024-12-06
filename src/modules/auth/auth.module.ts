import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports:[
    JwtModule.register({
      secret: "MI_CODIGO_SECRETO",
      signOptions:{expiresIn: '60m'}

    }),
    TypeOrmModule.forFeature([User])
  ],
  
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {  
}