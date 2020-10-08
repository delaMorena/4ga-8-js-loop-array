let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

//1. hacer un loop para que recorra c/ elemento del string.
//2. crear una variable con la letra que este en la posicion actual. par[i]
//3. Comprobar si la tengo. if tengo par[i] en counts counts[par[i]] si no existe undefined si existe 
//4. Si no existe inicializo en 1 counts[par[i]] = 1
//5. Si existe sumo 1
/*un array === objeto para acceder a objeto : objeto[clave]. 
igual que en un array, pero en un array el 
indice siempre es numerico*/
/*objeto = {clave(--letra): valor(--el numero de veces que sale y voy sumando), ...}*/ 
//6. añadir claves y valores al objeto counts
for (var i = 0; i < par.length; i++) {
    let letra = par[i];
    if (counts[letra] == undefined) {
        counts[letra] = counts[letra] + 1;
        //para que vaya sumando en cada iteración.
    }else if (letra != undefinded) {
        counts[letra] = 1;
    }
   
}
 

console.log(counts);

/*indexOf
indexOf(carácter,desde)
Devuelve la posición de la primera vez que 
aparece el carácter indicado por parámetro 
en un string. Si no encuentra el carácter en el s
tring devuelve -1. El segundo parámetro es opcional 
y sirve para indicar a partir de que posición se desea 
que empiece la búsqueda.
*/