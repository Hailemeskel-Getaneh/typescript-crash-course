// Polymorphism in TypeScript

class Person {

    constructor(public firstName: string, public lastName: string){
        //no need to initialize properties here with the this keyword since we did that in the constructor parameters
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person {

    constructor(firstName: string, lastName: string, public studentId: string){
        super(firstName, lastName); // Call the constructor of the parent class
    }

    // Overriding the fullName getter

    override get fullName(): string {
        return `${super.fullName} and ( Student ID: ${this.studentId})`;
    }
}

class Teacher extends Person {

    override get fullName(): string {
        return `Teacher ${super.fullName}`
    }
}

class Admin extends Person {

    override get fullName(): string {
        return `Admin ${super.fullName}`
    }
}


function printFullName(people: Person[]) {

    for( let person of people){ 
    console.log(person.fullName);
    }
}

printFullName([
    new Student('Hailemeskel', 'Getaneh', 'S12345'),
    new Teacher('Mahi', 'Tesfaye'),         
    new Admin('Admin', 'User')
]);