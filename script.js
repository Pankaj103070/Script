// Q1. Write a JavaScript function that takes an array and a value and searches that value in the given array.
// Write a function that takes two arguments - an array and a value. If the value provided in the argument is found in the array, 
// the function should return the position of the element in an array. If the element is not found, the function should return "-1". 

// Test the code by defining an array and passing that array as an argument in your function. 

function checkValue(arr,x){
    for(var a=0; a<arr.length; a++){
       if(arr[a]==x){
        console.log("The position of an element is"+" "+arr.indexOf(x));
       }else{
        console.log("-1");
       }
    }
}
checkValue([1, 2, 3, 4, 5],5);