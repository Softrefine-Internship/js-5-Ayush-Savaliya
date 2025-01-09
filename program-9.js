// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  
  branches = [];
  constructor(bname) {
    this.bname = bname;
  }
    
  addBranch(branch) {
    this.branches.push(branch);
    console.log(`${branch} added successfully.`);
  }

  removeBranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch ${branch} removed successfully.`);
    } 
    else {
      console.log(`Branch "${branch}" does not exist.`);
    }
  }

  displayBranches() {
    if (this.branches.length === 0) {
      console.log('No branches available.');
    } else {
      console.log(`List of ${this.bname} Bank Branches:`);
      this.branches.forEach((branch, i) => {
        console.log(`${i + 1}. ${branch}`);
      });
    }
  }
}

const bank = new Bank('BOB');

bank.addBranch('Branch ABC');
bank.addBranch('Branch PQR');
bank.addBranch('Branch XYZ');

bank.displayBranches();

bank.removeBranch('Branch ABC');

bank.displayBranches();

bank.removeBranch('Branch ABC1');