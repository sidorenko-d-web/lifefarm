export class ErrorHandler{
    constructor(errData){
        this.message = errData.message
        this.name = errData.name
    }

    handle(navigate){
        if(this.message == 'item does not exist'){
            navigate('/404')
        }
    }
}