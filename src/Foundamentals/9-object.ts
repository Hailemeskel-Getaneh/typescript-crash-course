// This is an  object in javascript.

const person = {id: 1, name: "John Doe", age: 30};

// here is an onbject example with typescript.

let employee:{
   readonly id : number; // the readonly keyword indicates it isnot reasignable or changable
    name : string;
    age? : number // the question mark indicates that this property is optional
} = { id : 123, name : 'Hailemeskel Getaneh'}

employee.name = "Haile Man"; 
// employee.id = 456; // This will cause an error because id is readonly
console.log(employee);

