// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


class Shape {
  calcArea() {
    // console.log("Method calcArea() is override by sub-class");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calcArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calcArea() {
    return this.base * this.height / 2;
  }
}

const c1 = new Circle(10);
console.log("Circle Area: " + c1.calcArea());

const t1 = new Triangle(8, 10);
console.log("Rectangle Area: " + t1.calcArea());
