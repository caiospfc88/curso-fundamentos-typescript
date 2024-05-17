// tipos basicos
let isActive;
isActive = true;
console.log(typeof isActive);
let total = 150;
let myName = "Matheus";
console.log(typeof isActive, typeof total, typeof myName);
// Inferencia de tipos
let isComplete = true;
//Arrays e objetos
let numbers = [1, 2, 3];
console.log(typeof numbers);
let user = {
    name: "Caio",
    age: 36,
};
console.log(user, typeof user, numbers, typeof numbers);
//Tuplas
// [n,n,n]
let rgb = [255, 0, 0];
console.log(typeof rgb);
//Funções
function greet(nome) {
    return `Olá ${nome}`;
}
console.log(greet("Caio"));
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "movendo para cima";
        case Direction.Down:
            return "movendo para baixo";
        case Direction.Right:
            return "movendo para direita";
        case Direction.Left:
            return "movendo para esquerda";
        default:
            return "Ficou parado";
    }
}
console.log(getDirectionMessage(Direction.Up));
