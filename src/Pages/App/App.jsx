/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import BookRow from "../../Componene/BookRow";

import { getDataFromLocalStorage } from "../../Uitis/Uitis.js";

export const App = () => {
  const [books, setBooks] = useState(getDataFromLocalStorage());
  // main array of objects state || books state || books array of objects

  // input field states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [PubYear, setPubYear] = useState("");

  // form submit event
  //clearInput
  const clearInput = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //creating book obj
    const book = {
      title,
      author,
      isbn,
      PubYear,
    };

    setBooks([...books, book]);

    console.log(books);
    // clearInput()
  };
  
  useEffect(() => {
    // console.log(books);
  }, [books]);
  // delete book from LS
  const deleteBtnKey = (isbn) => {
    const filter = books.filter((value, index) => value.isbn !== isbn);
    setBooks(filter);
  };
  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">

          <form
            onSubmit={handleSubmit}
            className="form-group"
          >
            <label>Title</label>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Author</label>
            <input
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              value={isbn}
              onChange={(event) => setIsbn(event.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
            <br></br>
            <label>Publish Year</label>
            <input
              value={PubYear}
              onChange={(event) => setPubYear(event.target.value)}
              type="text"
              className="form-control"
              required
            ></input>
            <br></br>
            <button
              type="submit"
              className="btn btn-success btn-md"
            >
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length ? (
            
            <>
              <div className="table-responsive">
                <table className="table">  
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Publish Year</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book, index) => (
                      <BookRow
                        deleteKey={deleteBtnKey}
                        key={book.isbn}
                        book={book}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setBooks([])}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          ) : (
            <p>No value added</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
