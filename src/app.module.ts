import { Module } from '@nestjs/common';

import { EventoModule } from './evento/evento.module';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminModule } from './admin/admin.module';
import { TicketsModule } from './tickets/tickets.module';
import { OrganizadorModule } from './organizador/organizador.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admintickets:7W4XYX1hHDwm3gzK@dbtickets.jlr4q.mongodb.net/?'),
    //MongooseModule.forRoot('mongodb://localhost:27017/tickets'),
    EventoModule,
    AdminModule,
    TicketsModule,
    OrganizadorModule,
  ],
})
export class AppModule {}
