// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{

  constructor(title, author, publyr) {
    this.title = title;
    this.author = author;
    this.publicationYear = publyr;
  }

  displayBookDetail() {
    //displayBookDetail() override by sub-class
    console.log(`${this.title} is written by ${this.author} in ${this.publicationYear}`);

  }

}
class Ebook extends Book{
  constructor(title, author, publyr, price) {
    super(title, author, publyr);
    this.price = price;
  }

  displayBookDetail() {

    console.log(`${this.title} is written by ${this.author} in ${this.publicationYear} and price is ${this.price}.`);
    
  }

}

const book1 = new Ebook('Pride & Prejudice', 'Jane Austine', 2003, 499);
book1.displayBookDetail();

const book2 = new Ebook('XYZ', 'ABC', 2002, 100);
book2.displayBookDetail();