import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar isLoggedIn={false}/>
     <Home />
     <Footer />
    </div>
  );
}

export default App;
