import React from "react";
import Book from "./Book";

const BookList = ({ books, onEdit, onDelete, onSelect, handleOpenModal }) => {
    return (
      <div className=" flex justify-center w-[60%] mx-auto flex-wrap ">
        {books.map((book) => (
          <Book key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} onSelect={onSelect} handleOpenModal={handleOpenModal}/>
        ))}
      </div>
    );
  };

export default BookList;
