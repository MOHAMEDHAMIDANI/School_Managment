import { Resolver , Query} from "@nestjs/graphql";
import { Lesson } from "./lesson.type";


@Resolver(of => Lesson)
export class LessonResolver {
    @Query(returns => Lesson)
    lesson (){
        return {
            id : '1',
            name : "Math",
            startDate : "2019-01-01",
            endDate : "2019-01-01"
        }
    }
}