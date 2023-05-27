import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import "./Buy.css"
import axios from 'axios';
function CartBuy() {
   // eslint-disable-next-line
  const {bookId} = useParams();
  const details = JSON.parse(localStorage.getItem('user'));
  const [address,setAddress] = useState(details.address);
  const [addrAvailable,setAddrAvailable] = useState(address?true:false);
  const [inputAddress,setInputAddress] = useState('');
  const [books, setBooks] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setCart(user.cart);
  }, []);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (cart && cart.length > 0) {
          const bookPromises = cart.map((id) =>
            axios.get(`http://localhost:5000/books/${id}`)
          );
          const bookResponses = await Promise.all(bookPromises);
          const fetchedBooks = {};
          bookResponses.forEach((res) => {
            const book = res.data;
            fetchedBooks[book._id] = book;
          });
          setBooks(fetchedBooks);
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    };

    fetchBooks();
  }, [cart]);
const handleAddressChange = () => {
  const userId = details.id;
  console.log(userId, inputAddress);
  axios
    .put("http://localhost:5000/users/updateAddress", { address:inputAddress, userId })
    .then((response) => {
      localStorage.setItem('user',JSON.stringify(response.data.user));
      setAddress(response.data.user.address);
      setAddrAvailable(true);
      console.log("Address updated successfully");
    })
    .catch((error) => {
      console.log("Error updating address: ", error);
    });
};

  return (
    
    <div className='buyContainer'>
      <div className="buyPage">
        <div className="address">
          {addrAvailable ? (
            <>
              <p>{address}</p>
              <button onClick={()=>{
                  setAddrAvailable(!addrAvailable)
              }}>Change Adress</button>
            </>
          ):(
            <>
            <textarea name="Address" id="address" cols="30" rows="10" placeholder='New Address (Locality , District , State , Pincode)' onChange={(e)=>{
              setInputAddress(e.target.value);
            }}></textarea>
            <button onClick={handleAddressChange}>Update</button>
            <button onClick={()=>{
              setAddrAvailable(!addrAvailable)
            }}>Back</button>
            </>
          )}
        </div>
        <span className="line"></span>
          <div className="buyItemDetails">
            {Object.values(books).length > 0 ? (
            Object.values(books).map((book, index) => (
            <div key={index}>
              <p>{book.title}</p>
              <p>Price : {book.price}</p>
            </div>
            )) ) : (<h1>None</h1>)}
          </div>
        <button className='payButton' onClick={()=>{
          alert("Payment Successful");
        }}>Pay</button>
      </div>
    </div>
  )
}
export default CartBuy
