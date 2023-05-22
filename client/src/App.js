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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem('token')?true:false);
  },[localStorage.getItem('token')])
  const loggingOut = () => {
    console.log("Logging out");
    localStorage.removeItem('token');
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
         isLoggedIn===true && (
           <>
           <Route path={'/profile'} element = {<Profile />} />
           <Route path={'/addBook'} element = {<AddBook />} />
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
