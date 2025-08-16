//  intersection type is done using the `&` operator.
// It allows you to combine multiple types into one.
// This is useful when you want to create a type that has all the properties of multiple types
// while ensuring that the resulting type has all the properties of each individual type.
// Example: Combining two types into one

type Person = {
    name : string;
    age : number;
}

type Employee = {
    id : number | string;
    postion : string;
}

type employeedPersion = Person & Employee;

let new_employee : employeedPersion = {
    name: "Hailemeskel Getaneh",
    age : 23,
    id : 'DBU1501246',
    postion : "Software Engineer"
}