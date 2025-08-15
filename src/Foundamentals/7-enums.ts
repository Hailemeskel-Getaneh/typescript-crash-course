// enums are another built in typescript types and they are used to define a set of named constants.
// they are useful when you have a fixed set of related values that you want to represent as
//  type. enums can be numeric or string based.    

// Example : if you have variables like this
        /*
            let small = 1;
            let medium = 2;
            let large = 3;
        */

// this can be change to the following 

const enum Size {Small = 1, Medium = 2, Large = 3};
let mySize : Size = Size.Medium
console.log(mySize);

// using the const keyword before the enum declaration allows TypeScript to inline the enum values at compile time, which can lead to better performance and smaller output code.

