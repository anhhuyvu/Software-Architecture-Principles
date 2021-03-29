

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    };
    getAuthor() {
        return this.author;
    };
    saveBook() {
        console.log("Book has been saved");
    };
}
// the book should only show the title and the author, it should not save the book.