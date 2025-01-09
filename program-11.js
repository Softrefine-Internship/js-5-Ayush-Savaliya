// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(acno, acname, bal=0) {
    this.acno = acno;
    this.acname = acname;
    this.balance = bal;
  }

  deposit(amt) {
   if (amt > 0) {
      this.balance += amt;
      console.log(`₹${amt} Credited to A/c *****${this.acno}, Total Balance : ₹${this.balance}`);
    } else {
      console.log('Deposit amt must be greater than 0');
    }
  }


  withdraw(amt) {
    if (amt > 0 && amt <= this.balance) {
      this.balance -= amt;
      console.log(`₹${amt} debited from A/c *****${this.acno}, Total Balance : ₹${this.balance}`);
    } else if (amt > this.balance) {
      console.log('Insufficient funds for withdrawal');
    } else {
      console.log('Withdrawal amt must be greater than 0');
    }
  }

  transfer(amt, recacno) {
    if (amt > 0 && amt <= this.balance) {
      this.balance -= amt;
      console.log(`₹${amt} transferred to A/c *****${recacno.acno}.`);
      recacno.deposit(amt);
    } else if (amt > this.balance) {
      console.log('Insufficient funds for transfer');
    } else {
      console.log('Transfer amt must be greater than 0');
    }
  }

  displayAccountDetails() {
    console.log(`Account Number: ${this.acno}`);
    console.log(`Account Holder: ${this.acname}`);
    console.log(`Balance: ₹${this.balance}`);
  }
}


const ac1 = new BankAccount('1001', 'Dharmik', 9000);
const ac2 = new BankAccount('1002', 'Ravi', 5000);


ac1.deposit(1500);      
ac1.withdraw(500);    
ac1.displayAccountDetails();

ac2.displayAccountDetails();
ac1.transfer(5000, ac2); 
ac2.displayAccountDetails();
