import React, { useState } from "react";
import Books from "./Books";
import axios from "axios";
import BookForm from "./BookForm";

const App = (props) => {
  

  const [books, setBooks] = useState([]);
  
  const getBooks = async () => {
    
    let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
    
    console.log(res);
    console.log(res.data);
    
    setBooks(res.data);
  };

  return (
    <div className="app-container">
      <h1>App Page</h1>
      <button onClick={getBooks}>Get Book</button>
      <BookForm />
      <Books books={books} />
    </div>
  );
};

export default App;