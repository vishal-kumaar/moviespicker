import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import State from "./states/index";

function App() {
  return (
    <BrowserRouter>
      <State>
        <ScrollToTop />
        <Navbar />
        <Sidebar />
        <Routes />
        <Footer />
      </State>
    </BrowserRouter>
  );
}

export default App;
