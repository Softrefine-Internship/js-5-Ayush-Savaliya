// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal{
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeAnimalsSound() {
    //displayBookDetail() override by sub-class
    console.log(`${this.species}'s sound like ${this.sound}`);
  }

}

class Dog extends Animal{
  constructor(species, sound, clr) {
    super(species, sound);
    this.clr = clr;
  }

  makeAnimalsSound() {
    console.log(`${this.species}'s sound like ${this.sound} and colour is ${this.clr}`);
  }

}

const dog1 = new Dog('Rottweilers', 'Purr', 'black');
const dog2 = new Dog('Siberian Huskies', 'Scream', 'grey');

dog1.makeAnimalsSound();
dog2.makeAnimalsSound();