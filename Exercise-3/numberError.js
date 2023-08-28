// WAF that throws an error if the parameter is not a number, and handles the error with custom error message
function ValidateNumber(num){
    return new Promise((resolve,reject) => {
        if(typeof num !== "number"){
            reject(new Error("invalid input,Exposed a number "));
        }else{
            resolve(num);
        }
    });
}

ValidateNumber(5)
.then(num =>console.log(num))
.catch(err => console.error(err.message));

ValidateNumber("Not a number")
.then(num => console.log(num))
.catch(err => console.error(err.message));