import { Field, ID, ObjectType } from "@nestjs/graphql";
import { studentType } from "src/student/student.type";

@ObjectType('Lesson')
export class Lesson {
    @Field(type => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    startDate : string ;
    @Field()
    endDate : string ;
    @Field(type => [studentType])
    students : string[];
}