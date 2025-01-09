//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
  constructor(width, height) {
    this.width = width;
    // console.log(width);
    this.height = height;
  }

  calcArea() {
    // console.log(this.width , this.height);
    return this.width * this.height;
  }

  calcPerimeter() {
    // console.log(this.width + this.height);
    return (this.width + this.height)*2;
  }

}

const r1 = new Rectangle(10, 20);
const r2 = new Rectangle(10, 10);

console.log(`Rectangle(1): Perimeter: ${r1.calcPerimeter()}, Area: ${r1.calcArea()}`);
console.log(`Rectangle(2): Perimeter: ${r2.calcPerimeter()}, Area: ${r2.calcArea()}`);