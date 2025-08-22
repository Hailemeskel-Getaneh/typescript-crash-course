
// method overriding in typescript

class Person {
    constructor(public firstName: string, public lastName: string)
{}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}

class Student extends Person {

    constructor(firstName: string, lastName: string, public studentId: string){
        super(firstName, lastName); // Call the constructor of the parent class
    }

    // Overriding the fullName getter

    override get fullName(): string {
        return `${super.firstName} and ( Student ID: ${this.studentId})`;
    }
}

class Teacher extends Person {

    // Overriding the fullName getter

    override get fullName(): string {
        return `Teacher ${super.fullName}`

    }
}

// Example usage
let student = new Student('Hailemeskel', 'Getaneh', 'S12345');
console.log(student.fullName); // Hailemeskel and ( Student ID: S12345)

let teacher = new Teacher('Mahi', 'Tesfaye');
console.log(teacher.fullName); // Teacher Mahi Tesfaye