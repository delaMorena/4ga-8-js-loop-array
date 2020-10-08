var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
var typeOfArr = [];
//your code here
//1. declarar un array nuevo vacío.
//2. Recorrer el array con un loop
//3. obtener una variable de cada loop
//4. comprobar el tipo de valor de esa variable con typeof. IF O SWITCH
//5. añadir strings resultatne al array con push.AQUÍ ME BLOQUEO
//6. console.log(typeOfArr)
var mix = [42];
var typeOfArr = [];
for (var i = 0; i <= mix.length; i++) {
    if (typeof mix[i] === 'number') {
        typeOfArr.push("number")
    }else if (typeof mix[i] === 'string'){
        typeOfArr.push("string")
    }else if (typeof mix[i] === 'object'){
        typeOfArr.push("object")
    }else if (typeof mix[i] === 'boolean'){
        typeOfArr.push("boolean")
    }
   console.log(typeOfArr)      
};


