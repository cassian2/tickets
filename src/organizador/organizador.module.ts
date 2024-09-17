import { Module } from '@nestjs/common';
import { OrganizadorService } from './organizador.service';
import { OrganizadorController } from './organizador.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Organizador, OrganizadorSchema } from './entities/organizador.entity';

@Module({
  controllers: [OrganizadorController],
  providers: [OrganizadorService],
  imports: [MongooseModule.forFeature([
    { name: Organizador.name, 
      schema:OrganizadorSchema
    }
  ])],
  exports:[OrganizadorService]
  
})
export class OrganizadorModule {}
