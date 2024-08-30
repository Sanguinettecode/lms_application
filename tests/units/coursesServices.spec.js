import  {describe, it} from "mocha"
import  {expect} from "chai"
import sinon from 'sinon'
import course from "../mocks/course.json" assert {type: "json"}
import {CourseService} from "../../src/Courses/courseService.js"
import {ErrorResponse} from "../../src/common/helpers/responseError.js"
import {Course} from "../../src/entities/course.js"

describe("courses module suite test", () => {
    const createCourseParams = course
    const newCourse = {
        id: 1,
        ... course
    }
    let courseRepository = {}
    let courseService= {}
    beforeEach(() => {
        courseRepository = {
            createCourse: sinon.stub(),
            findByTeacherId: sinon.stub()
        }
        courseService = new CourseService({courseRepository})
    })
    it("should createCourseRepository have be called with correct params", async () => {
        
        await courseService.createCourse(createCourseParams)

        expect(courseRepository.createCourse.calledOnce).to.be.ok
        expect(courseRepository.createCourse.calledWithExactly(new Course(createCourseParams))).to.be.ok
    })

    it("should createCourseRepository returns a new saved course with id", async () => {
        
        courseRepository.createCourse.resolves(newCourse)

        const response = await courseService.createCourse(createCourseParams)

        const expected = {
            message: "Course created",
            statusCode: 201,
            data: newCourse
        }

        expect(response).to.be.deep.equal(expected)
    })

    it("should findByTeacherId have be called with correct params", async () => {
        
        await courseService.createCourse(createCourseParams)

        expect(courseRepository.findByTeacherId.calledOnce).to.be.ok
        expect(courseRepository.findByTeacherId.calledWithExactly({title:"Test Course", teacherId: 1})).to.be.ok
    })
    it("should return an error if the course already exists", async () => {
        courseRepository.findByTeacherId.resolves(newCourse)
        const response = await courseService.createCourse(createCourseParams)

        const expected = {
            statusCode: 402,
            message: "Course already exists"
        }

        expect(response).to.be.deep.equal(expected)
    })

    it("should return an ErrorResponse if an unexpected error occurs", async () => {
        const unexpectedError = new Error("Unexpected error encountered")
        courseRepository.findByTeacherId.rejects(unexpectedError);

        const response = await courseService.createCourse(createCourseParams)
        const errorExpected = new ErrorResponse("Internal server error. Please try again later.", 500, unexpectedError)

        expect(response).to.be.deep.equal(errorExpected)
    })
})