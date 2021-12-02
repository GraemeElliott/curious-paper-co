import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/partials/header/header";
import Footer from "./components/partials/footer/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-container">
        <div className="content">Hello World! </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
