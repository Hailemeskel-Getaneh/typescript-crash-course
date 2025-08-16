// Type aliases allow you to create a new custom name for a type.
// This can be useful for simplifying complex types or creating more readable code.

//  example

type Employee ={
    id: number;
    name  :string;
    age: number;
}

let new_employee: Employee = {
    id : 123_455,
    name : "Hailemeskel Getaneh",
    age : 23
}

console.log('Hello', new_employee.name)