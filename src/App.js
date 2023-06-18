import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import State from "./states/index";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <State>
        <ScrollToTop />
        <Loading />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Navbar />
            <Sidebar />
            <Routes />
          </div>
          <Footer />
        </div>
      </State>
    </BrowserRouter>
  );
}

export default App;
