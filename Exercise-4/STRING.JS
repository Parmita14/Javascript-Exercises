// Waf that takes a string as input and returns true if the string contains only alphabets and false otherwise
function containsOnlyAlphabet(str){
    const regex = /^[a-zA-z]+$/;
    return regex.test(str);
}
console.log(containsOnlyAlphabet("abcDEF"));// true
console.log(containsOnlyAlphabet("123")); // false
console.log(containsOnlyAlphabet("a b c")); // false

// WAF that takes a string as input and returns true if the stirng contains at least one digit,false otherwise
function containsDigit(str){
    const regex = /\d/;
    return regex.test(str);
}
// the regular expression /\d/ matches any string that conatainss at least one digit.
console.log(containsDigit("abc123"));
console.log(containsDigit("abc"));

// WAF that takes a string as input and replaces all occurrences of "cat" with "dog".
function replaceCatWithDog(str){
    const regex = /cat/g;
    return str.replace(regex,"dog");
    // the g flag in the regular expression specifies that all occurrences should be replaced, not just the first one.
}
console.log(replaceCatWithDog("the cat sat on the mat"));
console.log(replaceCatWithDog("the cats sat on the mat"));

// WAF that takes a string as input and returns the number of vowels in the string.
function CountVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(CountVowels("Parmita"));

// WAF that takes a string as input and return true if the string is a valid email address,false otherwise
function isValidEmail(email){
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);

}
console.log(isValid("exampleabc@gmail.com"));
// this regular expression does not cover all possible email address formats, but it covers the most common ones.

//WAF that uses arrow function syntax to add two number and return the result.
const add = (a,b) => {
    return a+b;
}
console.log(add(2,3));

// WAF that takes an array of numbers and uses the spread operator to find maximum value
const findMax = (numbers) =>{
    // sprea doperator is used to pass array element as an argument to Math.max
    return Math.max(...numbers);
}
console.log(findMax([5,3,9,1,7]));

//WAF that takes an array of strings and returns a new array with all the strings in uppercase
const toUpperCase = (strings) =>{
    return strings.map((string) => string.toUpperCase());
};
// the Array.map() metod is used to create a new array with uppercase versions of the string

//WAF that takes an object and uses destructuring to extract the values of its properties and return them as array
const ObjectToArray = (obj) =>{
const {prop1,prop2,prop3} = obj;
return [prop1,prop2,prop3];
};

// WAF that takes a string and uses template literals to create a new string with the input string and a variable inserted into it.
const createString = (inputString, variable)=>{
    return `${inputString}${variable}`;
    //template literals are enclosed in backticks
};
console.log(createString("My name is","parmita"));
