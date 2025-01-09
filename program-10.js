// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product{

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calcTotalPrice(quantity) {
    //override by sub-class
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  }

  calcTotalPrice(quantity) {
    return Number(super.calcTotalPrice(quantity) + this.warranty);
  }
}

const p1 = new PersonalCareProduct(1, 'Conditionr', 10, 2);
const p2 = new PersonalCareProduct(2, 'Bodyloasan', 10, 5);

const totalPrice = p1.calcTotalPrice(3);
console.log(`Total Price: ${totalPrice}`);
const totalPrice2 = p2.calcTotalPrice(4);
console.log(`Total Price: ${totalPrice2}`);