import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "src/postagem/controllers/postagem.controller";
import { Postagem } from "src/postagem/entites/postagem.entity";
import { PostagemService } from "src/postagem/services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [],
})
export class PostagemModule{}