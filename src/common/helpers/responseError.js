export class ErrorResponse {
    constructor(message, statuscode, error = undefined) {
        this.message = message
        this.statusCode = statuscode
        if(error !== undefined) this.error = error
        
    }
}