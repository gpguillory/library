var firebaseConfig = {
    apiKey: "AIzaSyAd5MHqK46LGde06gRU-yQrx42tukxDtZs",
    authDomain: "top-library-project.firebaseapp.com",
    databaseURL: "https://top-library-project.firebaseio.com",
    projectId: "top-library-project",
    storageBucket: "top-library-project.appspot.com",
    messagingSenderId: "776792451831",
    appId: "1:776792451831:web:6e77544a2d8179264301f2",
    measurementId: "G-41P4M67DPD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let myLibrary = [];
var database = firebase.database();


function Book(title, author, pages, read, bookID) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.read = read;
    this.id = bookID;
}

var dbLibraryRef = firebase.database().ref().child('library');
dbLibraryRef.on('value', snapshot => {
  currentBookNum = snapshot.numChildren();
});

function writeNewBook() {
    const newBookForm = document.forms["form"];
    const newBook = new Book(newBookForm.elements["title"].value,
        newBookForm.elements["author"].value,
        newBookForm.elements["pages"].value,
        newBookForm.elements["read"].value,
        null);
    closeNewBookForm();

    console.log(newBook);

    firebase.database().ref("library/book").set(newBook);
}