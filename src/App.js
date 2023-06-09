import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  document.body.style.height= "1000px"
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;