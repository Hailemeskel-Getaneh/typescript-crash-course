// unknown type is a type-safe counterpart to the any type. It represents any value but requires explicit type checking before performing operations on it.
// This is useful when you want to ensure that you handle values safely without assuming their type.    

function processValue(value: unknown): void {
    // Check if value is a string before using string methods
    if (typeof value === "string") {
        console.log(`String length: ${value.length}`);
    } else if (typeof value === "number") {
        console.log(`Number value: ${value}`);
    } else {
        console.log("Unknown type, cannot process.");
    }
}