// WAF that uses console.assert to check whether a variable is equal to certain value, and throws an error if assertion fails
function assertEqual(actual,expected,message){
    console.assert(actual === expected , message || `Expected ${expected}, but got ${actual}`);
}
// this function can be used for simple value equaltiy assertion in javascript
// it is recommended to use a testing framework like Mocha or Jest for more complex tests.