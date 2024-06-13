import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { student } from './student/student.entity';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type : 'mongodb',
    url : 'mongodb://localhost:27017/school_management',
    useUnifiedTopology: true,
    entities: [Lesson , student ],
    synchronize: true,
  }), GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
  }), LessonModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
