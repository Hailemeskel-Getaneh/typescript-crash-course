// never type in TypeScript
// The never type represents values that never occur. It is used to indicate that a function will
// never return, such as in cases of throwing an error or an infinite loop. This is useful for
// ensuring that certain code paths are unreachable, providing better type safety and clarity in your
// codebase.    
function throwError(message: string): never {
    throw new Error(message); // This function will never return a value
}   

function infiniteLoop(): never {
    while (true) {
        // This function will never terminate
    }
}
function unreachableCode(): never {
    return throwError("This code should never be reached");
}
// Example usage:
try {
    unreachableCode(); // This will throw an error
}
catch (error:any) {
    console.error(error.message); // Output: This code should never be reached
}