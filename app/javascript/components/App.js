import React, { useState } from "react";
import Books from "./Books";
import axios from "axios";
import BookForm from "./BookForm";

const App = (props) => {
  

  const [books, setBooks] = useState([]);

  
  const getBooks = async () => {
    try {
      let res = await axios.get("/books");
      setBooks(res.data);
    } catch (err) {}
  };

  return (
    <div style={{ margin: "10px", border: "3px solid black" }}>
      <h1>App Page</h1>
      <button onClick={getBooks}>Get Books</button>
      <BookForm />
      <Books books={books} />
    </div>
  );
};

export default App;