// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calcAnnualSalary(){
    // console.log("Method calcAnnualSalary() is override by sub-class");
    return 12 * this.salary;
  }

}
class Manager extends Employee{
  constructor(name, salary, dept) {
    super(name, salary);
    this.dept = dept;
  }

  calcAnnualSalary(bonuse) {
    // console.log(12 * this.salary + bonuse)
    return (12 * this.salary) + bonuse;
  }
}

const m1 = new Manager("Ravi", 25000, 'HumanResources(HR)');
const m2 = new Manager("Ronak", 20000, 'HumanResources(HR)');


console.log(`Total Annual Salary of ${m1.name}: ` + m1.calcAnnualSalary(25000));
console.log(`Total Annual Salary of ${m2.name}: ` + m2.calcAnnualSalary(10000));