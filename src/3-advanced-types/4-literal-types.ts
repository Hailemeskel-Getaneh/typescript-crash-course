// Literal types are a way to specify exact values that a variable can hold.
// They are useful when you want to restrict a variable to a specific set of values,
// providing more precise type checking and better documentation for your code.

// Example: Defining a literal type for a specific string value

type clubName = "Liverpool" | "Real Madrid" | "St.Gorge's FC";
let myClub : clubName = "Liverpool"; // This is valid
// let myClub : clubName = "Arsenal"; // This would cause a TypeScript error because "Arsenal" is not part of the clubName type

// Example: Defining a literal type for a specific number value
type age = 18 | 21 | 25;
let myAge: age = 21; // This is valid
// let myAge: age = 30; // This would cause a TypeScript error because 30 is not part of the age type