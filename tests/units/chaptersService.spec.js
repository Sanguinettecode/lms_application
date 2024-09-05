import {describe, it} from 'mocha'
import { expect } from 'chai'
import {createSandbox} from 'sinon'
const sandbox = createSandbox()
import {ChapterService} from '../../src/Chapters/chapterService.js'
import { ErrorResponse } from '../../src/common/helpers/index.js'


describe('create chapter suite tests', () => {

    let chapterService = {}
    let chapterRepository = {}
    const today = new Date('2024-08-05')
    sandbox.useFakeTimers(today.getTime())
    const chapterParams = {
        title: 'chapter title', 
        description: 'description chapter',
        isFree: false,
        courseId: 1,
        bannerId: '1'
    }

    beforeEach(() => {
        chapterRepository ={
            create: sandbox.stub().resolves({
                id: 1,
                title: 'chapter title', 
                description: 'description chapter',
                isFree: false,
                createdAt: new Date(),
                position: 1,
                courseId: 1,
                bannerId: '1'
            })
        }
        chapterService = new ChapterService({chapterRepository})
    })
    it('should chapter repository create have be called with correct params', async () => {
        

        await chapterService.create(chapterParams)

        expect(chapterRepository.create.calledOnce).to.be.ok 
        expect(chapterRepository.create.calledWithExactly(chapterParams)).to.be.ok 
    })

    it('should chapter repository return a new chapter with id', async () => {

        const result = await chapterService.create(chapterParams)
        const expected = {
            id: 1,
            title: 'chapter title', 
            description: 'description chapter',
            isFree: false,
            createdAt: new Date(),
            position: 1,
            courseId: 1,
            bannerId: '1'
        }

        expect(result).to.be.deep.equal({
            message: 'is succeeded',
            statusCode: 201,
            data: expected
        })
    })
    it('should error if repository throws', async () => {
        const unexpectedError =  new Error("Unexpected error encountered")
        chapterRepository.create.rejects(unexpectedError)

        const result = await chapterService.create(chapterParams)
        const errorExpected = new ErrorResponse("Unexpected error encountered", 500, unexpectedError)

        expect(result).to.be.deep.equal(errorExpected)
    })
})