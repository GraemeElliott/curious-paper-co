import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/partials/header/header.component";
import Footer from "./components/partials/footer/footer.component";
import Homepage from "./pages/homepage/homepage";


const App = () => {

    return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/products/:id" exact element={<Products />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default App;
