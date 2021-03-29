
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
}
class Saver{
    saveBook(book)
    {
        console.log("Book has been saved");
    };
}