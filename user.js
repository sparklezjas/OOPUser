class User {
    constructor(name, email){
        this.name = name
        this.email = email
        this.account = new BankAccount(intRate=0.02, balance=0)
    }
    makeDeposit(amount){
        this.account.deposit(amount)
        return this
    }
    makeWithdrawl(amount){
        this.account.withdrawl(amount)
        return this
    }
    displayBalance(){
        console.log(`Name: ${this.name}, Account Balance: $${this.account.balance}`)
        return this
    }
    transferMoney(amount, recipient){
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            recipient.accountBalance += amount;
            console.log(`Transfer successful. ${this.name} transferred $${amount} to ${recipient.name}.`);
        } else {
            console.log(`Transfer failed. Insufficient funds.`);
        }
    }
}
const rick = new User("Rick Van Python", "rick@python.com")
const morty = new User("Morty Smith", "morty@python.com")
const bunny = new User("Bugs Bunny", "bugsbunny@javascript.com")

rick.makeDeposit(100).makeDeposit(200).makeDeposit(50).makeWithdrawl(150).displayBalance()

morty.makeDeposit(50).makeDeposit(150).makeWithdrawl(20).makeWithdrawl(50).displayBalance()

bunny.makeDeposit(500).makeWithdrawl(50).makeWithdrawl(20).makeWithdrawl(150).displayBalance()

rick.transferMoney(20, bunny)
rick.displayBalance()
bunny.displayBalance()

class BankAccount {
    constructor(intRate, balance){
        this.rate = intRate
        this.balance = balance
        this.initRate = 0.02
        return this
    }
    deposit(amount) {
        this.balance += amount
        return this
    }
    withdrawl(amount) {
        this.balance -= amount
        return this
    }
    displayAccountInfo() {
        console.log(`Interest rate: ${this.rate}, Account Balance: $${this.balance}`)
        return this
    }
    yieldInterest() {
        if (this.balance > 0) {
            this.balance += this.balance * this.rate
        }
        return this
    }
}

const bobsAcct = new BankAccount (0.05, 100)
const jerrysAcct = new BankAccount (0.03, 50)

bobsAcct.deposit(20).deposit(50).deposit(100).withdrawl(15).displayAccountInfo()
jerrysAcct.deposit(200).deposit(1000).withdrawl(100).withdrawl(50).withdrawl(150).withdrawl(200).displayAccountInfo()