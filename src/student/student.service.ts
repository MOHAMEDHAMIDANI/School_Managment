import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './createStudent.input';
import { v4 as uuid } from 'uuid';
import { student } from './student.entity';
@Injectable()
export class StudentService {
    constructor(@InjectRepository(student) private studentRepository : Repository<student>){

    }
    createStudent (createStudentInput : CreateStudentInput){
        const { firstName , lastName } = createStudentInput
        const newStudent = this.studentRepository.create({
            id : uuid(),
            firstName,
            lastName
        })
        return this.studentRepository.save(newStudent);
    }
    getStudents (){
        return this.studentRepository.find();
    }
    getStudent (id : string){
        return this.studentRepository.findOne({ where : { id : id }});
    }
}
