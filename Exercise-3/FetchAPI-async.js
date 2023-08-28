const { error } = require("console");

// WAF that uses asyn/await to make API call to fetch data and return promise with the response
async function fetchData(url){
    try{
        const response = await fetch(url);
        // wait for the response from the server
        const data = await response.json();
        // wait for the JSON data from the response
        return data;
    }catch(error){
        return Promise.reject(error);
    }
}
fetchData('https://jsonplaceholder.typicode.com/posts/1')
.then((data)=>
{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
});