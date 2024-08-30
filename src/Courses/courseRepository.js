export class CourseRepository {
    constructor(courseDatabase) {
        this.courseDatabase = courseDatabase
    }
    async create(course) {
        const newCourse = await this.courseDatabase.save(course)
        return newCourse
    }
}