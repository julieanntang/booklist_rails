import React from "react";
import Book from "./Book";

const Books = (props) => {
  const { books } = props;
  
  const renderBooks = () => {
    if (books.length == 0) {
      return <h1>No Books</h1>;
    }
    return books.map((book) => {
      return <Book key={book.title} {...book} />;
    });
  };
  
 return (
    <div className="books-container">
      <h1>Books Component</h1>
      {renderBooks()}
    </div>
  );
};

export default Books;
