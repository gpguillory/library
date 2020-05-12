let myLibrary = [];
var database = firebase.database();


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.read = read;
}

function addBookToLibrary () {

}
console.log(database);