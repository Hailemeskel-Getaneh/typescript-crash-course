// There are three keywords in TypeScript that are used to control access to class members: public, private, and protected.

// 1. public: Members are accessible from anywhere. by default, all members are public unless specified otherwise.
// 2. private: Members are accessible only within the class they are defined in.
// 3. protected: Members are accessible within the class and its subclasses, but not from

class Account {

    readonly id : number; 
    name :string;
    private _balance : number ;
    nickname?: string; 

    constructor(id: number, name: string, balance: number){
        this.id = id,
        this.name = name,
        this._balance = balance
    }

    deposit( amount: number): void {
        
        if( amount < 0){
            console.log('Invalid balance')
        }
        
        this._balance = this._balance + amount;
    }   

    // Getter method to access the private balance
    getBalance():number {
        return this._balance;
    }

    // private method to calculate Tax and this cannot be accessed outside the class
    private calculateTax(balance: number): number {
        return balance * 0.1; // Example tax calculation
    }
}

let account1 = new Account(123, 'Hailemeskel Getaneh', 0)

account1.deposit(120_000_000);
console.log(account1.getBalance())

console.log(account1 instanceof Account) // output should be true.