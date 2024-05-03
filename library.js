function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.displayInfo = function() {
        console.log(`${this.title}, ${this.author}, Pages: ${this.pages}`);
    };
}

const library = [];

function addBook(book) {
    library.push(book);
}

function searchByTitle(title) {
    console.log(library.filter((book) => book.title == title));
}

function searchByAuthor(author) {
    console.log(library.filter((book) => book.author == author));
}
  
function filterLongBooks() {
    console.log(library.filter((book) => book.pages > 100));
  }
  
function mapTitleAuthor() {
    return library.map((book) => {
        book.title = `Title: ${book.title}`;
        book.author = `Author: ${book.author}`;
    });
}  

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 302);
let book2 = new Book("Pride and Prejudice", "Jane Austen", 224)
let book3 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 1178)
book3.displayInfo() //before mapping

addBook(book1)
addBook(book2)
addBook(book3)

searchByTitle("Pride and Prejudice")
searchByAuthor("Harper Lee")
filterLongBooks()

mapTitleAuthor()
book3.displayInfo() //after mapping

