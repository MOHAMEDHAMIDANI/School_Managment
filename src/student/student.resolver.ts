import { Args, Mutation, Resolver , Query } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { studentType } from "./student.type";
import { CreateStudentInput } from "./createStudent.input";

@Resolver(of => studentType)
export class studentResolver {
    constructor(private studentService: StudentService){
    }
    @Query(returns => [studentType])
    students (){
        return this.studentService.getStudents();
    }
    @Query(returns => studentType)
    student (@Args('id') id : string){
        return this.studentService.getStudent(id);
    }
    @Mutation(returns => studentType)
        createStudent (
            @Args('createStudentInput') createStudentInput : CreateStudentInput,
        ){
            return this.studentService.createStudent(createStudentInput);
        }
}