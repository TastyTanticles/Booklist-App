
import { MdDelete } from "react-icons/md";
export default function BookRow({ book,deleteKey }) {
  const { title, author, isbn, PubYear } = book;
  return (
  
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td> {author} </td>
        <td> {PubYear} </td>
        <td className="deleteBtn"  onClick={()=>deleteKey(isbn)}><MdDelete /></td>
      </tr>

  );
  
}
