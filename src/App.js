import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    setSelectedBook(null)
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    setSelectedBook(null)
  };

  const handleOpenModal = () => {
    setIsFormOpen(true);
    setSelectedBook(null)
  };

  const handleCloseModal = () => {
    setIsFormOpen(false);
    setSelectedBook(null)
  };

  return (
    <div id="top" className=" bg-gray-100 flex flex-col">
      <h1 className=" text-white text-center p-2 text-xl font-bold bg-slate-400">
        Upravljanje knjigama
      </h1>
      {!isFormOpen ? <button className=" mt-5 w-[180px] rounded-md bg-blue-500 mx-auto text-white text-lg m-2 py-1 hover:bg-blue-700 " onClick={() => handleOpenModal()}>Dodaj knjigu</button> : null}
      { isFormOpen ? bookToEdit ? (
        <BookForm handleCloseModal={handleCloseModal} bookToEdit={bookToEdit} onUpdate={updateBook} />
      ) : (
        <BookForm handleCloseModal={handleCloseModal} onAdd={addBook} />
      ) : null}
      { books.length > 0 ? 
      
      <BookList
        books={books}
        onEdit={setBookToEdit}
        onDelete={deleteBook}
        onSelect={setSelectedBook}
        handleOpenModal={handleOpenModal}
      /> : <h2 className="mx-auto p-4 m-4"> Trenutno nema knjiga u bazi... </h2>
    }
      {books.length > 0 && selectedBook ? <BookDetails book={selectedBook} /> : null}
    </div>
  );
};

export default App;
