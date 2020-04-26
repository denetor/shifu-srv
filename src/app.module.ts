import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaoluModule } from "./taolu/taolu.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StepsModule } from './steps/steps.module';
import { ElementsModule } from './elements/elements.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'data/db.sqlite',
          autoLoadEntities: true,
          logging: true
      }),
      TaoluModule,
      AuthModule,
      UsersModule,
      StepsModule,
      ElementsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) {};
}
