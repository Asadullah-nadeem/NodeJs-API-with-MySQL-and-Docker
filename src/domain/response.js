class Response {
    constructor(stautusCode, httpStatus, message, data){
        this.timeStamp = new Data().toLocaleString();
        this.stautusCode = stautusCode;
        this.httpStatus = httpStatus;
        this.message = message;
        this.data = data;
    }
}
export default Response;