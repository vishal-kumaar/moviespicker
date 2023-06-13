import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
