import React from "react";
const Book = (props) => {

const { id, title, author, deleteBook } = props;
  
  return (
    <div style={{ margin: "10px", border: "3px solid green" }}>
      <h1>
        {title}
      </h1>
      <h2>{author}</h2>
      <button onClick={() => deleteBook(id)}>delete</button>
    </div>
  );
};
export default Book;