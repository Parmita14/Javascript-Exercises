function getKeys(obj){
    const keys = Object.keys(obj);
    return keys; 
}
const person = {
    name : "john",
    age : 30,
    gender : "male",
    city:"new york",
};
console.log(getKeys(person));
console.log(getKeys({}));
