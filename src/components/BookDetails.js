import React from 'react';

const BookDetails = ({ book }) => {
  if(book)
    return (
      <div className=' lg:w-[60%] mx-auto m-2 p-2 bg-white rounded-md text-center'>
        <h2 className=' text-xl font-bold'>Detalji o knjizi</h2>
        <p className=' text-lg'>Naslov: {book.title}</p>
        <p className=' text-lg'>Autor: {book.author}</p>
        <p className=' text-lg'>Opis: {book.description}</p>
      </div>
    );
  };

export default BookDetails;
