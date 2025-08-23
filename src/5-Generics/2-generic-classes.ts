// Generic classes

class Student<T>{

    constructor(public id:T , public name: string){};

    printInfo(): void{
      
        console.log(`Id : ${this.id}, Name: ${this.name}`)
    }

}

let numberId = new Student<number>(123, 'Haile')

numberId.printInfo()


// another example of generic class with two paramenters
class keyValuePair<K, V>{
    constructor(public key: K, public value: V){}

    printData(): void{
        console.log(`${this.key}:${this.value}`)
    }
}

let data1 = new keyValuePair<string, number>('ID', 123213)
data1.printData()

let data2 = new keyValuePair<string, string>('Name', 'Mahi')
data2.printData()