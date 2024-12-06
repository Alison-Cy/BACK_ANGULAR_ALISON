import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
//import { UsersModule } from '../users/users.module';
@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
