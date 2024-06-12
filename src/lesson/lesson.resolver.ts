import { Resolver , Query, Mutation, Args} from "@nestjs/graphql";
import { Lesson } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./leson.input";


@Resolver(of => Lesson)
export class LessonResolver {
    constructor(private lessonService: LessonService){

    }
    @Query(returns => Lesson)
    lesson (
        @Args('id') id : string ,
    ){
        return this.lessonService.getLesson(id);
    }
@Mutation(returns => Lesson)
    createLesson(
        @Args('createLessonInput') createLessonInput : CreateLessonInput
    ) : Promise<Lesson>{
        return this.lessonService.CreateLesson(createLessonInput)
    }
}