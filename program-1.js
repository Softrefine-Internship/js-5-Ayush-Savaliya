// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person{

  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  personDetails() {
    console.log(`I'm ${this.name}, ${this.age} years old and my country is ${this.country}`);
  }
}

const person1 = new Person('Dharmik' , 20 , 'India');
const person2 = new Person('Putin', 30, 'Russia');
person1.personDetails();
person2.personDetails();