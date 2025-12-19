import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaModule } from "src/tema/tema.module";
import { PostagemController } from "src/postagem/controllers/postagem.controller";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { PostagemService } from "src/postagem/services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [],
})
export class PostagemModule{}