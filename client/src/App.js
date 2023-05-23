import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search/Search";
import LoginPage from "./Pages/LoginRegister/LoginPage";
import { Route,Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import AddBook from "./Pages/AddBook/AddBook";
import Shopping from "./Pages/Shopping/Shopping";
import Buy from "./Pages/Buy/Buy";
import Cart from "./Pages/CartPage/Cart";
import CartBuy from "./Pages/Buy/CartBuy";
import UpdateBook from "./Pages/AddBook/UpdateBook";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')?true:false);
  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem('token')?true:false);
  },[isLoggedIn])
  const loggingOut = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  }
  return (
    <div className="App">
     <Navbar isLoggedIn={isLoggedIn} handleLogout={loggingOut}/>
     <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/search"} element={<Search />} />
       <Route path={"/login"} element={<LoginPage isLoggedIn={isLoggedIn} />} />
       <Route path={"/books/:id"} element={<Shopping />} />
       {
         isLoggedIn?(
           <>
           <Route path={'/profile'} element = {<Profile />} />
           <Route path={'/addBook'} element = {<AddBook />} />
           <Route path={"/buy/:bookId"} element={<Buy />} />
           <Route path={'/profile/cart'} element={<Cart />} />
           <Route path={'/profile/buyCart'} element={<CartBuy />} />
           <Route path={'/update/:bookId'} element={<UpdateBook />} />
          </>
        ):(
          <>
          <Route path={'/profile'} element = {<LoginPage isLoggedIn={isLoggedIn} />} />
          <Route path={'/addBook'} element = {<LoginPage isLoggedIn={isLoggedIn} />} />
          <Route path={'/buy'} element = {<LoginPage isLoggedIn={isLoggedIn} />} />
          <Route path={'/buy/*'} element = {<LoginPage isLoggedIn={isLoggedIn} />} />
         </>
        )
       }
      <Route path={"/*"} element={<Home />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
