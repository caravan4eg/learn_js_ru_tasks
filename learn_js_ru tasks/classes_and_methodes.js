class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

}

let user = new User('Jhon', 23);
let user2 =  new User('Jhon2', 223);

console.log(`Obj = user, Name: ${user.getName()}, age: ${user.getAge()}`);
console.log(`Obj = user2, Name: ${user2.getName()}, age: ${user2.getAge()}`);
