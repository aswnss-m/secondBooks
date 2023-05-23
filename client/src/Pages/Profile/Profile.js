import React, { useEffect,useState } from 'react'
import PageBreaker from "../../Components/PageBreaker/PageBreaker"
import "./Profile.css"
import {Link, useNavigate} from 'react-router-dom'
import Card from "../../Components/Card/Card" 
import axios from 'axios'
function Profile() {
  const [userName,setUserName]  = useState('');
  const [email,setEmail] = useState('');
  const [booksIds,setBooksIds] = useState([]);
  const [books,setBooks] = useState({});
  
  const handleDelete = async (bookId) => {
    try {
      // Delete the book from the Books collection
      await axios.delete(`http://localhost:5000/books/${bookId}`);
  
      // Remove the book from the books state
      setBooks((prevBooks) => {
        const updatedBooks = { ...prevBooks };
        delete updatedBooks[bookId];
        return updatedBooks;
      });
  
      // Remove the book from the booksIds state in the user's details
      setBooksIds((prevIds) => prevIds.filter((id) => id !== bookId));
  
      // Update the user's book list in the backend
      const userDetails = JSON.parse(localStorage.getItem('user'));
      const updatedUserDetails = {
        ...userDetails,
        books: userDetails.books.filter((id) => id !== bookId),
      };
      localStorage.setItem('user', JSON.stringify(updatedUserDetails));
  
      console.log("Book deleted successfully");
    } catch (error) {
      console.log("Error deleting book: ", error);
    }
  };
  const navigate = useNavigate();
  const handleUpdate = (id)=>{
    navigate(`/update/${id}`)
  }
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('user'));
    setUserName(details.name);
    setEmail(details.email);
    setBooksIds(details.books);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookPromises = booksIds.map(id =>
          axios.get(`http://localhost:5000/books/${id}`)
        );
        const bookResponses = await Promise.all(bookPromises);
        const fetchedBooks = {};
        bookResponses.forEach(res => {
          const book = res.data;
          fetchedBooks[book._id] = book;
        });
        setBooks(fetchedBooks);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchBooks();
  }, [booksIds]);
  
  return (
    <div className='profileContainer'>
      <div className="profileHeader">
        <div className="profilePicture">
            <img src="https://unsplash.it/100" alt="Profile" />
        </div>
        <div className="profileDetails">
            <p className='boldText'>{userName}</p>
            <p>{email}</p>
            <Link to={'/AddBook'}><button className='greenButton'>Sell Book</button></Link>
        </div>
      </div>
<PageBreaker title={'Books You are selling'}/>
<div className="profileCards">
  {Object.values(books).length > 0 ? (
    Object.values(books).map((book, index) => (
      <Card
        key={index}
        image={`http://localhost:5000/books/cover/${book._id}`}
        title={book.title}
        price={book.price}
        coursecode={book.courseCode}
        semester={book.semester}
        course={book.course}
        _id={book._id}
        smallButton="Delete"
        handleSmallButton={() => handleDelete(book._id)}
        largeButton="Update"
        handleLargeButton={() => handleUpdate(book._id)}
      />
    ))
  ) : (
    <h3>None</h3>
  )}
</div>

    </div>
  )
}

export default Profile
