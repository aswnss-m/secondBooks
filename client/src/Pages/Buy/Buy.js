import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import "./Buy.css"
import axios from 'axios';
function Buy() {
    const navigate = useNavigate()
    const {bookId} = useParams();
    const details = JSON.parse(localStorage.getItem('user'));
    const [address, setAddress] = useState(details.address);
    const [addrAvailable, setAddrAvailable] = useState(address ? true : false);
    const [inputAddress, setInputAddress] = useState('');
    const [book, setBook] = useState({});
    useEffect(() => {
        axios.get("http://localhost:5000/books/" + bookId).then((res) => {
            setBook(res.data);
        }).catch((err) => {
            console.log(err)
        });
    }, [bookId]);

    const handleAddressChange = () => {
        const userId = details.id;
        console.log(userId, inputAddress);
        axios.put("http://localhost:5000/users/updateAddress", {
            address: inputAddress,
            userId
        }).then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setAddress(response.data.user.address);
            setAddrAvailable(true);
            console.log("Address updated successfully");
        }).catch((error) => {
            console.log("Error updating address: ", error);
        });
    };
    const handleBuy = () => {
      const userId = details.id;
      console.log("I am here");
      axios
        .put("http://localhost:5000/users/orderList", {
          userId: userId,
          bookId: bookId,
        })
        .then((response) => {
          console.log(response);
          // Update the user data in localStorage
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    
    
    return (
        <div className='buyContainer'>
            <div className="buyPage">
                <div className="address">
                    {
                    addrAvailable ? (
                        <>
                            <p>{address}</p>
                            <button onClick={
                                () => {
                                    setAddrAvailable(!addrAvailable)
                                }
                            }>Change Adress</button>
                        </>
                    ) : (
                        <>
                            <textarea name="Address" id="address" cols="30" rows="10" placeholder='New Address (Locality , District , State , Pincode)'
                                onChange={
                                    (e) => {
                                        setInputAddress(e.target.value);
                                    }
                            }></textarea>
                        <button onClick={handleAddressChange}>Update</button>
                        <button onClick={
                            () => {
                                setAddrAvailable(!addrAvailable)
                            }
                        }>Back</button>
                    </>
                    )
                } </div>
                <span className="line"></span>
                <div className="buyItemDetails">
                    <p>{
                        book.title
                    }</p>
                    <p>Price : {
                        book.price
                    }</p>
                </div>
                <button className='payButton'
                    onClick={handleBuy}>Pay</button>
            </div>
        </div>
    )
}
export default Buy
