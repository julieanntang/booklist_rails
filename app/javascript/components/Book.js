import React from "react";

const Book = ({ title, author }) => {
  
  return (
    <div style={{ margin: "10px", border: "3px solid green" }}>
      <h1>
        {title}
      </h1>
      <h2>{author}</h2>
    </div>
  );
};
export default Book;