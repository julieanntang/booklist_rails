import React from "react";
import Book from "./Book";

const Books = ({ books, deleteBook }) => {
  
  // const renderBooks = () => {
  //   if (books.length == 0) {
  //     return <h1>No Books</h1>;
  //   }
  //   return books.map((book) => {
  //     return <Book key={book.title} {...book} />;
  //   });
  // };
  
 return (
    <div style={{ margin: "10px", border: "3px solid blue" }}>
      <h1>Books</h1>
      {books.map((book) => (
      <Book deleteBook={deleteBook} key={book.title} {...book} />
      ))}
    </div>
  );
};

export default Books;
