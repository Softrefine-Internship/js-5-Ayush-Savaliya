// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  
  departments = [];
  constructor(uname) {
    this.uniName = uname;
  }
    
  addDept(dept) {
    this.departments.push(dept);
    console.log(`${dept} added successfully.`);
  }

  removeDept(dept) {
    const index = this.departments.indexOf(dept);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Dept ${dept} removed successfully.`);
    } 
    else {
      console.log(`Dept "${dept}" does not exist.`);
    }
  }

  displayDepartments() {
    if (this.departments.length === 0) {
      console.log('No departments available.');
    } else {
      console.log(`List of ${this.uniName} University departments:`);
      this.departments.forEach((dept, i) => {
        console.log(`${i + 1}. ${dept}`);
      });
    }
  }
}

const university = new University('AU');

university.addDept('Dept ABC');
university.addDept('Dept PQR');
university.addDept('Dept XYZ');
university.displayDepartments();
university.removeDept('Dept ABC');
university.displayDepartments();
university.removeDept('Dept ABC1');