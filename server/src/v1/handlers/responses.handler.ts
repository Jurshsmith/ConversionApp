
export class IMsg {
    status: number;
    message: string;
    data?: any;
}
export const MsgResponse = (status, message, isSuccess: boolean, data?): IMsg =>{
    let response: IMsg = new IMsg();

    Object.assign(
        response,
        status ? { status } : null,
        message ? { message } : null,
        {isSuccess},
        data ? { data } : null
    );

    return response;
}