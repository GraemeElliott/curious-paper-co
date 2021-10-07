import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ProductsPage from './pages/products/products';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={ProductsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
