

class Account {

    constructor(
        public readonly id: number,
        public name: string,
        private _balance: number){
                   // The properties are initialized directly in the constructor parameters
        }

    deposit( amount: number): void {
        
        if( amount < 0){
            console.log('Invalid balance')
        }
        
        this._balance = this._balance + amount;
    }   

    // Getter method to access the private balance
    get balance():number {
        return this._balance;
    }

    // Setter method to update the private balance
    set balance(amount: number) {
        if (amount < 0) {
            console.log('Invalid balance');
        } else {
            this._balance = amount;
        }
    }

    // private method to calculate Tax and this cannot be accessed outside the class
    private calculateTax(balance: number): number {
        return balance * 0.1; // Example tax calculation
    }
}

let account1 = new Account(123, 'Hailemeskel Getaneh', 0)

account1.deposit(120_000_000);

console.log(account1 instanceof Account) 