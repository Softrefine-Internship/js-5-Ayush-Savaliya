// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.


class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model; 
    this.year = year;
  }

  displayDetails() {
    // console.log("Method displayDetails() is override by sub-class");
    console.log(`${this.make} made ${this.model} in ${this.year}`) ;

  }
}

class Car extends Vehicle{
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    console.log(`${this.make} made ${this.doors} doors ${this.model} in ${this.year}`) ;
  }
}

const car1 = new Car('Tata', 'hatchbacks', 2024, 4);
const car2 = new Car('Mahindra', 'SUV', 2023, 4);
car1.displayDetails();
car2.displayDetails();