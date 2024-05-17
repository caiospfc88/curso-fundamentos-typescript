// tipos basicos
let isActive: boolean;

isActive = true;

console.log(typeof isActive);

let total: number = 150;

let myName: string = "Matheus";

console.log(typeof isActive, typeof total, typeof myName);

// Inferencia de tipos
let isComplete = true;

//Arrays e objetos
let numbers: number[] = [1, 2, 3];

console.log(typeof numbers);

let user: { name: string; age: number } = {
  name: "Caio",
  age: 36,
};

console.log(user, typeof user, numbers, typeof numbers);

//Tuplas
// [n,n,n]
let rgb: [number, number, number] = [255, 0, 0];

console.log(typeof rgb);

//Funções
function greet(nome: string): string {
  return `Olá ${nome}`;
}

console.log(greet("Caio"));

//Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getDirectionMessage(direction: Direction): string {
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
