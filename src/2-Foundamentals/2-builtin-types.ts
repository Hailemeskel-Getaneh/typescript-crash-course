let my_number : number = 244_454_234;
let name : string = "Hailemeskel";
let isActive : boolean = true;

// # Typescript can identify the of the variable based on the value assigned to it if you initialize it at the time of declaration.
// unlless it becomes any type

let age = 23; // TypeScript infers the type as number
let country = "Ethiopia"; // TypeScript infers the type as string
let isStudent = false; // TypeScript infers the type as boolean

let level; // TypeScript infers the type as any since no value is assigned