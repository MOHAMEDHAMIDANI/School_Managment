import { Resolver , Query, Mutation, Args, ResolveField, Parent} from "@nestjs/graphql";
import { Lesson } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./leson.input";
import { AssignStudentToLessonInput } from "./assignLEssonToStudents.input";
import { StudentService } from "src/student/student.service";


@Resolver(of => Lesson)
export class LessonResolver {
    constructor(private lessonService: LessonService , private studentService: StudentService){

    }
    @Query(returns => Lesson)
    lesson (
        @Args('id') id : string ,
    ){
        return this.lessonService.getLesson(id);
    }
    @Query(returns => [Lesson])
    lessons (){
        return this.lessonService.getLessons();
    }
@Mutation(returns => Lesson)
    createLesson(
        @Args('createLessonInput') createLessonInput : CreateLessonInput
    ) : Promise<Lesson>{
        return this.lessonService.CreateLesson(createLessonInput)
    }
    @Mutation(returns => Lesson)
    assignStudentsToLesson(@Args('assignStudentToLessonInput') assignStudentToLessonInput : AssignStudentToLessonInput){
        const { studentIds , lessonId } = assignStudentToLessonInput
        return this.lessonService.assignStudentsToLesson(lessonId, studentIds)
    }
    @ResolveField()
    async students(@Parent() lesson : Lesson){
        return this.studentService.getManyStudents(lesson.students)
    }
}