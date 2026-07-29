export function newError(status,message){
    const err = new Error(message)
    err.status =status
    return err
}


// const test = newError(500,"server error");
// console.log(test);
