import React, { useState } from "react";
import Books from "./Books";
import axios from "axios";
import BookForm from "./BookForm";

const App = (props) => {
  

  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  
  const getBooks = async () => {
    try {
      let res = await axios.get("/books");
      setBooks(res.data);
    } catch (err) {}
  };

  const addBook = async (book) => {
    console.log(book);
    try {
      
      let res = await axios.post("/books", book);
      console.log(res);
      let newBooks = [res.data, ...books];
      setBooks(newBooks)

    } catch(err) {
      alert("failed to create");
      console.log(err);
    }
  }

  const deleteBook = async (title) => {
    try {
      await axios.delete("/books/${title}")
      const newBooks = books.filter(book => book.title !== title);
      setBooks(newBooks);

  } catch(err) {
      alert("failed to delete");
      console.log(err);
    }
  }
   

  return (
    <div style={{ margin: "10px", border: "3px solid black" }}>
      <h1>Book List</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "hide" : "New Book Form"}
        </button>
        <br />
      {showForm && <BookForm addBookProp={addBook} />}
      <button onClick={getBooks}>Get Books</button>
      <Books books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default App;