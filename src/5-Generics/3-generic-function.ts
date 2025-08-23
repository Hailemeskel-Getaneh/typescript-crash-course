// Generic functions

function wrapInArrays<T>( value: T){

     return value;
}

let result1 = wrapInArrays(1); // you can specify like wrapInArrays<number>(4)  but it identifies it.
let result2 = wrapInArrays("Mahi");

console.log(result1, " ", result2)

// Another example of using generics methods inside a class

class Student {

    static printID<T>(id: T): void{ // static means belongs to the class
        console.log(`ID: ${id}`)
    }
}


Student.printID('daf324da');
Student.printID(2321321);