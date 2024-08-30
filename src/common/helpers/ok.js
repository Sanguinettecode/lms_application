export class Ok {
    constructor(message, statusCode, data = undefined) {
        this.message = message
        this.statusCode = statusCode
        if(data !== undefined) this.data = data
    }
}