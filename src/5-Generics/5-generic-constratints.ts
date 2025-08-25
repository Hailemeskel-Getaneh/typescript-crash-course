// by defautt, generic types are unconstrained. so that we can pass any type as a generic argument
// but sometimes we want to limit the kinds of types that can be passed to a generic type
// we can do this by using a generic constraints


function myFunction<T extends string | number>(value: T){
    return value;

}

myFunction(1);
myFunction("Mahi");
// myFunction(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'. 



// another example using an interface to define a constraint

interface Lengthwise {
    length: number;
}       
function logLength<T extends Lengthwise>(value: T): T {
    console.log(value.length);
    return value;
}

logLength("Hello"); // works because string has a length property
logLength([1, 2, 3]); // works because array has a length property
logLength({ length: 10, value: 3 }); // works because object has a length property
// logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// logLength({ value: 3 }); // Error: Argument of type '{ value: number; }' is not assignable to parameter of type



// Another example with defining an interface with specific properties

function student<T extends { name: string; age: number }>(student: T): T {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
    return student;
}   

student({ name: "Mahi", age: 21 }); // works
// student({ name: "Mahi" }); // Error: Property 'age' is missing
// student({ age: 21 }); // Error: Property 'name' is missing
// student({ name: "Mahi", age: 21, grade: "A" }); // Error: Object literal may only specify known properties   


// Constraint by class
class Person {
    constructor(public name: string) {}
}
function createInstance<T extends Person>(c: new (name: string) => T, name: string): T {
    return new c(name);
}
let person = createInstance(Person, "Mahi");
console.log(person.name); // Mahi
// let notPerson = createInstance(String, "Mahi"); // Error: Argument of type 'StringConstructor' is not assignable to parameter of type 'new (name: string) =>


