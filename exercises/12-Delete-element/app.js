var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    newArr = []
    for (let i = 0; i > personName.length; i ++) {
        if (personName[i] == 'daniella') {
            newArr.push(personName[i])
        } 
    }
	return newArr//your code here
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));