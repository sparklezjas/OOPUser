class User {
    constructor(username, emailAddress){
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance += amount
    }
    makeWithdrawl(amount){
        this.accountBalance -= amount
    }
    displayBalance(){
        console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
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
console.log(rick.name)
console.log(morty.name)

rick.makeDeposit(100)
rick.makeDeposit(200)
rick.makeDeposit(50)
rick.makeWithdrawl(150)
rick.displayBalance()

morty.makeDeposit(50)
morty.makeDeposit(150)
morty.makeWithdrawl(20)
morty.makeWithdrawl(50)
morty.displayBalance()

bunny.makeDeposit(500)
bunny.makeWithdrawl(50)
bunny.makeWithdrawl(20)
bunny.makeWithdrawl(150)
bunny.displayBalance()

rick.transferMoney(20, bunny)
rick.displayBalance()
bunny.displayBalance()