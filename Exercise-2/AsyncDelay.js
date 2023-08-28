// WAF to stimulate an asynchronous delay using callback
function simulateDelay(Delay,callback){
    setTimeout(callback,Delay);
}
console.log("Before delays");
simulateDelay(2000, ()=>
{
    console.log("after delay");
});
console.log("function finish executing");