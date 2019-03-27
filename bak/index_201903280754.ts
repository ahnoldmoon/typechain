// interface Human{
//     name: string;
//     age: number;
//     gender: string;
// }
class Human {
    public name : string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

// const person = {
//     name: "munnt",
//     age : 48,
//     gender : "male"
// }

// const sayHi = (name:string, age:number, gender:string): string => {
const sayHi = (person : Human):string => {
    // console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
};

// console.log(sayHi("munnt", 48, "male"));
console.log(sayHi(lynn))

export {};
