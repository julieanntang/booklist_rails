import React, { useState } from "react";
import axios from "axios";

const BookForm = (props) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    const formObj = {title: title, author: author}
    let res = await axios.post('/books', formObj)
    console.log(res.data)
  };
  
 return (
    <form className="book-form" onSubmit={handleSubmit}>
      <p>title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>author</p>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type='submit'>add</button>
    </form>
  );
};
export default BookForm;