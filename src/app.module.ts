import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type : 'mongodb',
    url : 'mongodb://localhost:27017/school_management',
    useUnifiedTopology: true,
    entities: [Lesson],
    synchronize: true,
  }), GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
  }), LessonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
