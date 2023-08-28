// WAF to read a file using the Node.js file System module and handle the contents with a callback.
const { error } = require('console');
const fs = require('fs');

function readFileContents(filepath,callback){
    // use the readFile method of the fs module to read contents of the file

    // this code assumes that the file is being read is a text file(hence utf8 encoding argument).if you 're reading a binary file(e.g. an image),you'll need to use a different encoding argument.
    //you can also use promise or async/ await instead
    
    fs.readFile(filepath,'utf8',(error,contents) =>
    {
        if(error){
            callback(error);
        }else{
            callback(null,contents);
        }
    });
}
// example use case
readFileContents('example.txt',(error,contents)=>
{
    if(error){
        console.error(error);
    }else{
        console.log(contents);
    }
});
