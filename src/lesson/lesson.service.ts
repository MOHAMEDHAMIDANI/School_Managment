import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { CreateLessonInput } from './leson.input';
@Injectable()
export class LessonService {
    constructor(@InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,) {

    }

    CreateLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name, startDate, endDate: endDate
        } = createLessonInput
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name: name,
            startDate: startDate,
            endDate: endDate
        })
        return this.lessonRepository.save(lesson);
    }
    getLesson(id: string) {
        return this.lessonRepository.findOne({ where: { id: id } });
    }
}
