// Union types are a powerful feature in TypeScript that allow you to define a variable that can hold multiple types.
// This is particularly useful when you want to allow a variable to be one of several types,
// providing flexibility while still maintaining type safety.

// example

function printId(id: number | string): void {
    
    if( typeof id === 'number'){
        if ( id % 2 === 0){
            console.log(`Even ID:${id}`);
        }
    }
    else {
        console.log("String ID: ", id);
    }
}

printId(101); // This will print "Even ID: 101" if the number is even
printId("202"); // This will print "String ID: 202"

// You can also use union types with arrays, objects, and other complex types.
type User = {
    id: number;
    name: string;
} | {
    id: string;
    username: string;
};
