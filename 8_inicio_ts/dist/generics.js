//Generics
//Ts -> tipar
//f -> tipo x
//f -> tipo y --- erro
//f -> tipo G -> x,y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 36, 9, 12]);
let stringArray = getArray(["Caio", "TI", "Programador", 36]);
console.log(numberArray);
console.log(stringArray);
// Restringir tipos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "Caio", age: 36 }, { job: "Programador", isActive: true });
console.log("Objeto resultado: ", result);
