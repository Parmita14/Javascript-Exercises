function getpropertyValues(arr,propName){
    const values = arr.map((obj) => obj[propName]);
    return values;
}
const people = [
    {name : "pranay",age:20,gender : "male"},
    
];