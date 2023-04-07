import React, { useState } from "react";

const BookForm = ({ onAdd, bookToEdit, onUpdate }) => {
  const [title, setTitle] = useState(bookToEdit ? bookToEdit.title : "");
  const [author, setAuthor] = useState(bookToEdit ? bookToEdit.author : "");
  const [description, setDescription] = useState(
    bookToEdit ? bookToEdit.description : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      onUpdate({ ...bookToEdit, title, author, description });
    } else {
      onAdd({ title, author, description });
    }
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  return (
    <form className=" p-2 m-2 flex flex-col shadow-md w-full lg:w-[60%] mx-auto my-10 bg-white rounded-md " onSubmit={handleSubmit}>
      <div className=" w-full lg:w-[40%] mx-auto mt-10 p-2 m-2 flex justify-between ">
        <label className=" text-lg mr-2 w-[25%] " htmlFor="title">
          Naslov:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className=" bg-blue-100 rounded-md w-[75%] "
        />
      </div>
      <div className=" w-full lg:w-[40%] mx-auto p-2 m-2 flex justify-between ">
        <label  className=" text-lg mr-2 w-[25%] " htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className=" bg-blue-100 rounded-md w-[75%] "
        />
      </div>
      <div className=" w-full lg:w-[40%] mx-auto p-2 m-2 flex justify-between ">
        <label  className=" text-lg mr-2 w-[25%] " htmlFor="description">Opis:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className=" bg-blue-100 rounded-md w-[75%] h-[200px] "
        />
      </div>
      <button className=" rounded-md bg-blue-300 w-20 mx-auto text-white text-lg m-2 py-1 hover:bg-blue-500 " type="submit">{bookToEdit ? "Ažuriraj" : "Dodaj"}</button>
    </form>
  );
};

export default BookForm;
