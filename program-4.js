// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


class BankAccount{

  constructor(acno, bal) {
    this.acno = acno;
    this.balance = bal;
  }

  deposit(amt) {
     if (amt > 0) {
      this.balance += amt;
      console.log(`₹${amt} Credited to A/c *****${this.acno}, Total Balance : ${this.balance}`);
    } else {
      console.log('Deposit amt must be greater than 0');
    }
  }

  withdraw(amt) {
    if (this.balance >= amt  && amt > 0 ) {
      this.balance -= amt;
      console.log(`₹${amt} debited from A/c *****${this.acno}, Total Balance : ${this.balance}`);
      
    }else if (amt > this.balance) {
      console.log('Insufficient funds for withdrawal');
    } else {
      console.log('Withdrawal amt must be greater than 0');
    }
  }

}

const ac1 = new BankAccount(1001, 10000);
ac1.deposit(1000);
ac1.withdraw(1000);
ac1.withdraw(10001);

const ac2 = new BankAccount(1002, 1000);
ac2.deposit(50);
ac2.withdraw(100);

const ac3 = new BankAccount(1003, 5000);
ac3.deposit(20);
ac3.withdraw(40);