import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Evento, EventoSchema } from './entities/evento.entity';

@Module({
  controllers: [EventoController],
  providers: [EventoService],
  imports: [MongooseModule.forFeature([
    { name: Evento.name, 
      schema:EventoSchema}
  ])],
})
export class EventoModule {}
