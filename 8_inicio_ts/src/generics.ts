//Generics
//Ts -> tipar
//f -> tipo x
//f -> tipo y --- erro
//f -> tipo G -> x,y
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray([1, 2, 36, 9, 12]);
let stringArray = getArray(["Caio", "TI", "Programador", 36]);

console.log(numberArray);
console.log(stringArray);

// Restringir tipos
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const result = merge(
  { name: "Caio", age: 36 },
  { job: "Programador", isActive: true }
);

console.log("Objeto resultado: ", result);

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const meuTodo: Todo = {
  title: "Teste",
  description: "Testando",
  completed: false,
};

const todoAtualizado = updateTodo(meuTodo, { completed: true });

console.log("Meu todo", todoAtualizado);

//somente leitura
const meuSegundoTodo: Readonly<Todo> = {
  title: "Teste 2",
  description: "Testando 2",
  completed: false,
};

//meuSegundoTodo.title = "testando ReadOnly"
