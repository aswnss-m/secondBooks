import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search/Search";
import LoginPage from "./Pages/LoginRegister/LoginPage";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navbar isLoggedIn={false}/>
     <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/search"} element={<Search />} />
       <Route path={"/login"} element={<LoginPage isLoggedIn={false} />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
