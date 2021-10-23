import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch ";
import { debounce } from "throttle-debounce";

function BooksApp(props) {
  //states 
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);


  //shelfs 
  const bookShelve = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];


  //handle moving books around
  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let updatedBooks = [];
    updatedBooks =books.filter(b=>b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf =shelf;
      updatedBooks =updatedBooks.concat(book);
    }

   /*  const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    }); */

    setBooks(updatedBooks);
  };

  //searching throw the api
  const search = debounce(300, false, (q) => {
    if (q.length > 0) {
      BooksAPI.search(q).then((books) => {
        if (books.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(books);
        }
      });
    } else {
      setSearchBooks([]);
    }
  });


  //reste the search
  const handleRest = () =>   setSearchBooks([])


  //when component is done loading fetch the books
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
    return () => {};
  }, []);

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <BookList BookShelves={bookShelve} books={books} onMove={moveBook} />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <BookSearch
            books={searchBooks}
            onMove={moveBook}
            myBooks={books}
            onSearch={search}
            onReset={handleRest}
          />
        )}
      />
    </div>
  );
}

export default BooksApp;
