class Person{
    readonly name: string;
    readonly age: number;

    constructor(name: string, age:number){
    this.name = name;
    this.age = age;
}

}
const person = new Person("Yash",20);
console.log(person)

