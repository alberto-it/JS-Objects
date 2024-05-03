function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
    };
    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    };
  
    this.calculateInterest = function(interestRate, years) {
        const finalBalance = this.balance * Math.pow(1 + interestRate / 100, years);
        return finalBalance - this.balance;
    };
  }
  
  const account1 = new Account(555123, "John Doe");
  account1.deposit(2100);
  account1.withdraw(100);
  const interest = account1.calculateInterest(5, 2); //  5% for two years
  
  console.log("Account Number:", account1.accountNumber);
  console.log("Owner:", account1.owner);
  console.log("Current Balance:", account1.balance);
  console.log("Interest Earned:", interest);
  