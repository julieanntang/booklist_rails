import React from "react";
const Book = (props) => {
  
  const { title, author } = props;
 
  return (
    <div className="book-container">
      <h1>
        {title}
      </h1>
      <h2>{author}</h2>
    </div>
  );
};
export default Book;