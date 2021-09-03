import React, { useState } from "react";
import axios from "axios";

const BookForm = (props) => {

  const [title, setTitle] = useState(props.title ? props.title : "")
  const [author, setAuthor] = useState('')
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    props.addBookProp({ title, author });
    setTitle("");
    setAuthor("");
  
  };
  
 return (
   <div style={{ margin: "10px", border: "3px solid pink" }}>
    <h2>Book Form</h2>
    <form className="book-form" onSubmit={handleSubmit}>
      <p>title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>author</p>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button>{props.id ? "update" : "add"}</button>
    </form>
    </div>
  );
};
export default BookForm;