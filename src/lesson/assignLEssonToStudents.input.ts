import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentToLessonInput{
    @IsUUID()
    @Field(type => [ID])
    studentIds : string[];
    @IsUUID('4' , { each: true })
    @Field(type => ID)
    lessonId : string;
}