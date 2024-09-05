import { ErrorResponse, Ok } from '../../src/common/helpers/index.js'

export class ChapterService {
    constructor({chapterRepository}){
        this.chapterRepository = chapterRepository
    }

    async create({title, description,isFree, courseId, bannerId}) {
        try {
            const newChapter = await this.chapterRepository.create({title, description, isFree, courseId, bannerId})
            return new Ok('is succeeded', 201, newChapter)
        } catch (error) {
            return new ErrorResponse(error.message, 500, error)
        } 
    }
}