// Inheritace 

class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  walk() {      
    console.log(`${this.name} is walking.`);
  }
}

class Student extends Person {  
    constructor(name: string, age: number, public studentId: string) {
        super(name, age); // Call the constructor of the parent class
    }
    
    study() {
        console.log(`${this.name} is studying.`);
    }
    
    // Overriding the greet method
    greet() {
        console.log(`Hello, I am ${this.name}, a student with ID ${this.studentId}.`);
    }
    }

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age); // Call the constructor of the parent class
    }
    
    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
    
    // Overriding the greet method
    greet() {
        console.log(`Hello, I am ${this.name}, a teacher of ${this.subject}.`);
    }
}   

let student = new Student('Hailemeskel', 20, 'S12345');
student.greet(); // Hello, I am Hailemeskel, a student with ID S12345.
student.walk(); // Hailemeskel is walking.
student.study(); // Hailemeskel is studying.

let teacher = new Teacher('Mahi', 35, 'Mathematics');
teacher.greet(); // Hello, I am Mahi, a teacher of Mathematics.
teacher.walk(); // Mahi is walking.
teacher.teach(); // Mahi is teaching Mathematics.