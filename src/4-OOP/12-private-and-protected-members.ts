// protected and private members in classes.
// Protected members are accessible within the class and its subclasses.    
// private members are only accessible within a class.


class Person {
    constructor(public firstName: string, public lastName: string){}

    get fullName (): string {
        return `${firstName} ${lastName}`
    } 

    protected thinking(): string{
        console.log('A person can think')
    }

    private walk(): string{
        console.log('A person can walk')
    }
}

class Student extends Person {
    constructor(firstName: string, lastName: string, public studentId: string){
        super(firstName, lastName)
    }

    override get fullName(): string{
        return `Student ${super.fullName}`
    }
}

class Teacher extends Person {
    override get fullName(): string {
        return `Teacher ${super.fullName}`
    }
}


let printNames = (people: Person[]) => {
    for(let person of people) {
        console.log(person.fullName)
    }
}

printNames([
    new Student('Hailemeskel', 'Getaneh', 'DBU1501246')
    new Teacher('Wondimagegn', 'Mulugeta')
])