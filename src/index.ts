interface Human{
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "munnt",
    age : 48,
    gender : "male"
}

// const sayHi = (name:string, age:number, gender:string): string => {
const sayHi = (person : Human):string => {
    // console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
};

// console.log(sayHi("munnt", 48, "male"));
console.log(sayHi(person))

export {};
