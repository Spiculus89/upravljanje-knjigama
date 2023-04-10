import React from "react";

const Book = ({ book, onEdit, onDelete, onSelect, handleOpenModal }) => {

  return (
    <div className=" shadow-lg m-2 p-2 bg-white rounded-md text-center w-[400px]">
      <img
        className=" rounded-md"
        src="https://www.kindpng.com/picc/m/494-4945751_blank-book-cover-png-vlank-book-cover-png.png"
        alt="Dummy book cover"
      />
      <h3 className="text-xl m-2 p-2">Naziv knjige: {book.title}</h3>
      <h4 className="text-lg p-1">Autor: {book.author}</h4>
      <button
        className=" bg-yellow-500 m-2 py-1 px-3 rounded-md hover:bg-yellow-700 hover:text-white "
        onClick={() => {
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
          onSelect(book);
        }}
      >
        Detalji
      </button>
      <button
        className=" bg-green-500 m-2 py-1 px-3 rounded-md hover:bg-green-700 hover:text-white "
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onEdit(book);
          handleOpenModal()
        }}
      >
        Uredi
      </button>
      <button
        className=" bg-red-500 m-2 py-1 px-3 rounded-md hover:bg-red-700 hover:text-white "
        onClick={() => onDelete(book.id)}
      >
        Obriši
      </button>
    </div>
  );
};

export default Book;
