import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaoluModule } from "./taolu/taolu.module";
import { Taolu } from './taolu/taolu.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'data/db.sqlite',
          entities: [ Taolu ],
          logging: true
      }),
      TaoluModule,
      AuthModule,
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) {};
}
