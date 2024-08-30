import {describe, it} from 'mocha'
import {expect} from 'chai'
import {createSandbox} from'sinon'
import { Course } from '../../src/entities/course.js'
import {CourseDatabase} from '../../src/common/database/courses.js'
import course from '../mocks/course.json' assert {type: 'json'}
import {CourseRepository} from '../../src/Courses/courseRepository.js'


describe('CourseRepository suite test', () => {
    const sandbox = createSandbox()
    let courseRepository = {}
    let courseDatabase = {}
    let courseParams = course
    before(() => {
        courseDatabase = new CourseDatabase()
        sandbox.stub(
            courseDatabase,
            courseDatabase.save.name
        )
        courseRepository = new CourseRepository(courseDatabase)
    })
    it('should create a new course', async () => {
        courseDatabase.save.resolves({
            id:1,
            ... courseParams
        })
        const params = courseParams
        const course = new Course(params)
        const newCourse = await courseRepository.create(course)

        expect(newCourse.id).to.be.not.null
        expect(newCourse.title).to.equal('Test Course')
        expect(newCourse.description).to.equal('This is a test course')
        expect(newCourse.category).to.equal('Test Category')
        expect(newCourse.teacherId).to.equal(1)
    })
})