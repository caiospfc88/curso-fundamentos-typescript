//Utilizando interface
const myUser = { id: 1, name: "Caio", isActive: true };
console.log(myUser, typeof myUser);
//Classes
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = this.isActive;
    }
    greet(isNew) {
        console.log(`Olá, meu nome é ${this.name}`);
        if (isNew) {
            console.log("E sou novo por aqui!");
        }
    }
}
const personData = new Person(1, "Caio", true);
console.log(personData, typeof personData);
console.log(personData.greet(true));
