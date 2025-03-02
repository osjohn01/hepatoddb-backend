import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnowledgeModule } from './graph/graph.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Neo4jModule } from './neo4j/neo4j.module';
import { DiseaseModule } from './disease/disease.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/disease'),
    ConfigModule.forRoot(),  // Load environment variables
    Neo4jModule,
    KnowledgeModule,
    Neo4jModule,
    DiseaseModule
  ],
})
export class AppModule {}
