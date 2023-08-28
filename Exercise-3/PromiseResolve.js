// WAF that returns a promise whih resolves after a specified number of milliseconds
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },milliseconds);
    });
}
console.log("start");
delay(2000).then(()=>
{
    console.log("2 seconds elapsed");
});
console.log("end");
// output
//start
//end
// 2 seconds elapsed