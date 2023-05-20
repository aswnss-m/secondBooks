import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search/Search";
import LoginPage from "./Pages/LoginRegister/LoginPage";
import { Route,Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import AddBook from "./Pages/AddBook/AddBook";
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  const loggingOut = () => {
    console.log("Logging out");
  }
  return (
    <div className="App">
     <Navbar isLoggedIn={isLoggedIn} handleLogout={loggingOut}/>
     <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/search"} element={<Search />} />
       <Route path={"/login"} element={<LoginPage isLoggedIn={isLoggedIn} handleLogin={setIsLoggedIn}/>} />
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
