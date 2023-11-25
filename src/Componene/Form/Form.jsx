


// export default function Form() {

//     const clearInput = () => {
//         setTitle("");
//         setAuthor("");
//         setIsbn("");
//         setPubYear("");
//       };
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         //creating book obj
//         const book = {
//           title,
//           author,
//           isbn,
//           PubYear,
//         };
    
//         setBooks([...books, book]);
    
//         console.log(books);
//         // clearInput()
//       };
      
//   return (
//     <div>
    
//     <form
//             onSubmit={handleSubmit}
//             className="form-group"
//           >
//             <label>Title</label>
//             <input
//               value={title}
//               onChange={(event) => setTitle(event.target.value)}
//               type="text"
//               className="form-control"
//               required
//             ></input>
//             <br></br>
//             <label>Author</label>
//             <input
//               value={author}
//               onChange={(event) => setAuthor(event.target.value)}
//               type="text"
//               className="form-control"
//               required
//             ></input>
//             <br></br>
//             <label>ISBN#</label>
//             <input
//               value={isbn}
//               onChange={(event) => setIsbn(event.target.value)}
//               type="text"
//               className="form-control"
//               required
//             ></input>
//             <br></br>
//             <label>Publish Year</label>
//             <input
//               value={PubYear}
//               onChange={(event) => setPubYear(event.target.value)}
//               type="text"
//               className="form-control"
//               required
//             ></input>
//             <br></br>
//             <button
//               type="submit"
//               className="btn btn-success btn-md"
//             >
//               ADD
//             </button>
//           </form>
//     </div>
//   )
// }
