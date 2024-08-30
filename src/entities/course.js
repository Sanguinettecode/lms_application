export class Course {

    constructor({title, description, category, teacherId, status = "draft"}) {
        this.title = title
        this.description = description
        this.category = category
        this.teacherId = teacherId
        this.status = status
    }

}