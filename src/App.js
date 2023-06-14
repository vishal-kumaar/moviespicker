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
    <State>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Sidebar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </State>
  );
}

export default App;
