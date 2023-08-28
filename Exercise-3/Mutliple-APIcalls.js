// WAF that uses async/await to make mutliple API calls in parallel and returns a promise with an array of responses
async function fetchMutlipleData(urls){
    try{
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        // use promise.all to make multiple API calls and wait for all of them to resolve
        return data;
    }catch(error){
        return error.message;
    }
}
consturls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
];
// call the function with the urls and log the array of responses
fetchMutlipleData(urls)
.then(responses => console.log(responses))
.catch(error => console.log(error));


