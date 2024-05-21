console.log("Exercicio 1");
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

const meuCarro: Vehicle = {
  make: "Fiat",
  model: "Punto HLX 1.4",
  year: 2010,
};

function printMake(obj: Vehicle): void {
  console.log("A marca do carro é: ", obj.make);
}

printMake(meuCarro);
console.log("Exercicio 2");

function firstElement<T>(array: T[]): T {
  return array[0];
}
const arrayExercicio2 = [21, 32, 33, 48];
const arrayExercicio2String = ["Caio", "Teste", "Exercicio"];

console.log(firstElement(arrayExercicio2));
console.log(firstElement(arrayExercicio2String));

console.log("Exercicio 3");

type Product = {
  id: number;
  name: string;
  price: number;
};

function freezeProduct(product: Product): Readonly<Product> {
  return Object.freeze(product);
}

const bread: Product = { id: 2, name: "Pão", price: 1.99 };

const frozenBread = freezeProduct(bread);
//frozenBread.name = "Pão doce";

function updateProductPrice(
  product: Product,
  newPrice: Partial<Product>
): Product {
  return { ...product, ...newPrice };
}
const updatedBread = updateProductPrice(bread, { price: 2.19 });

console.log("Pão atualizado: ", updatedBread);
