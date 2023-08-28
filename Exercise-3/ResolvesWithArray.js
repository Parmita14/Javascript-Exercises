// WAF that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.
function getRandomNumbersArray(length,delay){
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            const numbersArray = Array.from({length},() =>
            Math.floor(Math.random()*100));
            resolve(numbersArray);
        },delay);
    });
}
// Array.from method is used to generate an array of random numbers with the specified length.
getRandomNumbersArray(5,200)
      .then((result)=>
{
    console.log(result);
})
      .catch((error) =>{
    console.error(error);
});

getRandomNumbersArray(10,3000)
.then((result)=>
{
    console.log(result);
})
.catch((error) =>
{
    console.error(error);
});