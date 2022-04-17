import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/partials/header/header.component";
import Footer from "./components/partials/footer/footer.component";
import Homepage from "./pages/homepage/homepage";
import SignInRegisterPage from "./pages/account/sign-in-register/sign-in-register"
import ProductCategoriesPage from "./pages/products/product-categories-page/product-categories-page";
import ProductsCollectionPage from './pages/products/products-collection-page/products-collections-page'
import CheckoutPage from './pages/checkout/checkout';



function App() {
  return (
    <Router>
      <Header />
      <div className="main-content-wrapper">
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sign-in-register" component={SignInRegisterPage} />
          <Route exact path="/products" component={ProductCategoriesPage} />
          <Route exact path="/products/:id" component={ProductsCollectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </div>
      <Footer />
    </Router>
  )
};

export default App