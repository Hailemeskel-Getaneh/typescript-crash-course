// Type aliases.

type User = {
    name: string;
    age: number;
    occupation?: string;  // optional property
}

let user1 : User = {
    name : 'Hailemeskel Getaneh',
    age : 23,
    occupation : 'Software Engineer'
}

let user2 : User = {
    name : 'John Doe',
    age : 30
}

console.log(`user1: ${user1.name}, Age: ${user1.age}, Occupation: ${user1.occupation}`);
console.log(`user2: ${user2.name}, Age: ${user2.age}, Occupation: ${user2.occupation ?? 'Not specified'}`);


type Bird ={
    fly: () => void;
}

type Fish = {
    swim: () => void;
}

let pet : Bird | Fish;

// Defining valid days with union types
type ValidDays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

function isValidDay(day: string): day is ValidDays {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(day);
}


