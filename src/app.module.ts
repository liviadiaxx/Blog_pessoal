import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem} from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema.module'; 
import { Tema } from './tema/entities/tema.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password: 'Sext@feira13',
      database: 'db_blog_pessoal',
      entities: [Postagem, Tema],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

