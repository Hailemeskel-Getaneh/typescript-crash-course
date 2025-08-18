// Type assertion in TypeScript
// Type assertion allows you to tell the TypeScript compiler that you know more about the type of a variable than it does.
// This can be useful when you have more information about the type of a variable than TypeScript can infer.
// It helps you to avoid type errors and allows you to work with types that may not be explicitly defined in your code. 

// Example:
function getLength(value: string | number): number {    
    // Using type assertion to treat value as a string
    return (value as string).length; // This will work if value is a string
}   



getLength("Hello, TypeScript!"); // Output: 17
getLength(12345); // This will cause a runtime error since number does not have a length property