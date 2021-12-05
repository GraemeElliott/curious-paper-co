import React from "react";
import { Switch, Route, BrowserRouter, } from "react-router-dom";
import './App.css';
import Header from "./components/partials/header/header.component";
import Footer from "./components/partials/footer/footer.component";
import Homepage from "./pages/homepage/homepage";
import ProductsDirectoryPage from "./pages/products/products-directory/products-directory";
import ProductsCollectionView from "./pages/products/products-collection-view/products-collection-view";
import ProductDetailView from "./pages/products/product-details-view/product-details-view";


const App = () => {

    return (
      <BrowserRouter>
          <Header />
          <div className="main-content-wrapper">
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/products" component={ProductsDirectoryPage} />
            <Route exact path="/products/:category" component={ProductsCollectionView} />
            <Route exact path="/products/:category/:item" component={ProductDetailView} />
            </Switch>
            </div>
          <Footer />
      </BrowserRouter>
    );
}

export default App;
