// WAF to download a file asynchronously and handle the progress and completion events with callback
function downloadFile(url,progressCallback,completionCallback){
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.responseType = "blob";
    // specify response type as blob so that it should be treated as a binary object

    xhr.addEventListener("progress",(event)=>
    {
        // calc the progress percent and invoke the progress callback
        const progress = Math.round((event.loaded/event.total)*100);
        progressCallback(progress);
    });
    xhr.addEventListener("load",()=>{
        // invoke the completion call back with download blob object
        completionCallback(xhr.response);
    });
    xhr.send();
}

// test case
const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";
downloadFile(url,
(progress)=>
console.log(`Download progres: ${progress}%`),
(blob)=>
console.log(`File download.Blob size: ${blob.size} bytes`)
// completion callback logs the size of the downloaded blob
);
// this function uses the XMLHttpRequest object to download the file asynchronously it can be used in browser environment , but not in Node.js environment. In Node.js,the fs module should be used to read and write files asynchronusly.