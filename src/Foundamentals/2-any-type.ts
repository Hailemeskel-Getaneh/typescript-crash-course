// You should avoid using `any` type as much as possible,
// as it defeats the purpose of TypeScript's type system.
let level: any; // TypeScript infers the type as any since no value is assigned

function displaymessage(document: any) {
    console.log(document);
}   