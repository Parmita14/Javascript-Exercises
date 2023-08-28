function sumNum(num1,num2){
    const sum = num1+ num2;
    return sum;
}
console.log(sumNum(5,10));

function getStringLength(str){
    const length = str.length;
    return length;
}
console.log(getStringLength("CodeHelp"));

const num1 = Number(21);
const num2 = Number(43);

const sum = num1 + num2;
const diff = num1-num2;
const prod = num1*num2;
const quotient = num1/ num2;

console.log(`Sum : ${sum}`);
console.log(`Difference: ${diff}`);
console.log(`Product: ${diff}`);
console.log(`Quotient: ${quotient}`);

function  findLargerNumber(num1,num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
 console.log(findLargerNumber(5,4));

 const OriStri = "codeHelp";
 function reverseString(str){
    const reversedString = str.split("").reverse().join("");
    return reversedString;
 }
 console.log(reverseString(OriStri));

function checkNum(number){
    if(number > 0){
        console.log(`${number} is positive`);
    }else if(number < 0){
        console.log(`${number} is negative`);
    }else{
        console.log(`${number} is zero`);
    }

}
checkNum(10);
checkNum(-1);
checkNum(0);

function Multiplication(number){
    for(let i=1;i<=10;i++){
        let result = number*i;
    
    console.log(`${number} X ${i} = ${result}`);
}
}
Multiplication(23);

function sumNumbers(number){
    let sum = 0;
    for(let i=1;i<=number;i++){
        sum += i;
    }
    return sum;

}
console.log(sumNumbers(10));
console.log(sumNumbers(1));

function countVowels(str){
    const vowels = ["a","e","i","o","u"];
    let cnt = 0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase()))cnt++;
    }
    return cnt;
}
console.log("codehelp");

function findCommonElements(arr1,arr2){
    let commonEle = [];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            if(!commonEle.includes(arr1[i])){
                commonEle.push(arr1[i]);
            }
            
        }
    }
    commonEle.sort((a,b) => a-b);
            return commonEle;
}
const arr1 =[1,2,3,4,5];
const arr2 =[3,4,5,6];
const commonElements = findCommonElements(arr1,arr2);
console.log(commonElements);

function greet(name){
    console.log(`Hello ${name}! How are you doing today?`);
}
greet("parmita");

function getSquare(number){
    const square = number ** 2;
    return square;
}
const result = getSquare(4);
console.log(result);

function countLetters(str){
    const counts = {};
    for(let i=0;i<String.length;i++){
        const char = str[i];
        if(counts[char]){
            counts[char]++;
        }else{
            counts[char] =1;
        }
    }
    return counts;
}
const letterCounts = countLetters("webDevelopment");
console.log(letterCounts);

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
   
}
const counter = createCounter();

function sumEvenNumbers(numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 === 0){
            sum += numbers[i];
        }
    }
    return sum;
}
const numbers = [1,2,3,4,5,6];
console.log(sumEvenNumbers(numbers));

function sumArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum; 
}
const numbers1 = [1,2,3,4];
console.log(sumArray(numbers1));

function filterLongStrings(arr){
    let filteredArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length > 5){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(filterLongStrings(["apple","banana","kiwi"]));



