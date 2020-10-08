var arr = [45,67,87,23,5,32,60];
var finalArr =[];
//1. Hacer un loop para que recorra desde el final el array 
//2. declarar nueva variable y añadirle los valores con push
//Your code here.
for (var i = arr.length-1; i >= 0; i--) {
     finalArr.push(arr[i]);
     //por qué no vale con return???
   

}
console.log(finalArr);