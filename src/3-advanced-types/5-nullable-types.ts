// Nullable types in TypeScript
// Nullable types allow you to explicitly specify that a variable can be null or undefined.
// This is useful for handling cases where a value may not be present,
// providing better type safety and avoiding runtime errors.

// Example: 

function greetUser( name : string | null | undefined) : void {
    if (name === null) {
        console.log("Hello, Guest!");
    } else if (name === undefined) {
        console.log("Hello, User!");
    } else {
        console.log(`Hello, ${name}!`);
    }
}