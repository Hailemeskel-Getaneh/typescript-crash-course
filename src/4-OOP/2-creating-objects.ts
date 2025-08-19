

class Account {

    id : number;
    name :string;
    balance : number = 20;

    constructor(id: number, name: string, balance: number){
        this.id = id,
        this.name = name,
        this.balance = balance
    }

    deposit( balance: number): void {
        
        if( balance < 0){
            console.log('Invalid balance')
        }
        
        this.balance = this.balance + balance;
    }
}

let account1 = new Account(123, 'Hailemeskel Getaneh', 0)

account1.deposit(120_000_000);
console.log(account1.balance)

console.log(account1 instanceof Account) // output should be true.