import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from './student.entity';
import { studentResolver } from './student.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([student])],
  providers: [studentResolver,StudentService]
})
export class StudentModule {}
