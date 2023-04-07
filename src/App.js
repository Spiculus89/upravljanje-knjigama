import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: uuidv4() }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setBookToEdit(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div id="top" className=" bg-gray-100">
      <h1 className=" text-white text-center p-2 text-xl font-bold bg-slate-400">
        Upravljanje knjigama
      </h1>
      {bookToEdit ? (
        <BookForm bookToEdit={bookToEdit} onUpdate={updateBook} />
      ) : (
        <BookForm onAdd={addBook} />
      )}
      <BookList
        books={books}
        onEdit={setBookToEdit}
        onDelete={deleteBook}
        onSelect={setSelectedBook}
      />
      {books.length > 0 ? <BookDetails book={selectedBook} /> : null}
    </div>
  );
};

export default App;
