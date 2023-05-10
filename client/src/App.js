import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route,Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
function App() {
  return (
    <div className="App">
     <Navbar isLoggedIn={false}/>
     <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/search"} element={<Search />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
