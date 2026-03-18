
// String

// let myName : string = "Yash Kumar";

// myName = "Something Other Person";

// console.log(myName)

// // Number

// let a : Number = 12;

// let b : Number = 14;

// // Any Type

// let color : any = "crimson";

// color = 20;
// color  = true;

// console.log(color)



// Regular function 
// function addOne(num: number){
//     return num + 1;
// }

// const result = addOne(3);
// console.log(result)

// Arrow Function Annotations

// const double  = (x: number, y: number) => x * y;

// const res = double(2,10);

// console.log(res)


// Default Function


// function greet(person = "Yash Kumar"){
//     return `Hello ${person}`
// }

// const res = greet();
// console.log(res)


// If we do not define the type the function in void category

// function printMessage(message: string): void{
//     console.log(`This is my ${message}`)
// }

// printMessage(" Important message")

// let never;

// function throwError(msg: string): never{
//          throw new Error(msg);
// }

// function infiniteLoop(): never{
//     while(true){}
// }

// let x: never;

// function neverReturns(): never{
//     while(true){}
// }

// x = neverReturns();

// Array Creating in Typescript 

const nums: number[] = [1,3];
const str: string[] = ["one", "two", "three"]
console.log(str);
console.log(nums);

const items: string[] = [];
items.push("Yash Kumar");
console.log(items)

const nums1: number[] = [];

nums1.push(29);
nums1.push(47);

console.log(nums1);
