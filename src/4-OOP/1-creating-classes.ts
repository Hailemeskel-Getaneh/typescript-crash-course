

class Account {

    id : number;
    name :string;
    balance : number;

    constructor(id: number, name: string, balance: number){
        this.id = id,
        this.name = name,
        this.balance = balance
    }

    deposit( balance: number): void {
        
        if( balance < 0){
            console.log('Invalid balance')
        }
        
        balance = balance + balance;
    }
}