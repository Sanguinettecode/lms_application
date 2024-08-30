import {ErrorResponse, Ok} from '../common/helpers/index.js'
import {Course} from "../entities/course.js"

export class CourseService{
    constructor({courseRepository}){
        this.courseRepository = courseRepository
    }
    async createCourse(params) {
        const { title, description, category, teacherId } = params
       try {
            const existingCourse  = await this.courseRepository.findByTeacherId({title, teacherId})
            if (existingCourse) {
                return new ErrorResponse("Course already exists", 402)
            }
            const course = new Course({ title, description, category, teacherId })
            const newCourse = await this.courseRepository.createCourse(course)

            return new Ok("Course created", 201, newCourse) 
       } catch (error) {
            return new ErrorResponse("Internal server error. Please try again later.", 500, error)
       }
    }
}