import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search/Search";
import LoginPage from "./Pages/LoginRegister/LoginPage";
import { Route,Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true)
  return (
    <div className="App">
     <Navbar isLoggedIn={isLoggedIn}/>
     <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/search"} element={<Search />} />
       <Route path={"/login"} element={<LoginPage isLoggedIn={isLoggedIn} />} />
       <Route path={'/profile'} element = {<Profile />} />
       {/* {
         isLoggedIn ?? (
           <>
          </>
        )
       } */}
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
