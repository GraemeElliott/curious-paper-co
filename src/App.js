import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/partials/header/header.component';
import Footer from './components/partials/footer/footer.component';
import Homepage from './routes/homepage/homepage';
import SignInRegisterPage from './routes/sign-in-register/sign-in-register';
import ProductCategoriesPage from './routes/product-categories/product-categories';
import ProductsByCategory from './routes/products-by-category/products-by-category';
import ProductsByBrand from './routes/products-by-brand/products-by-brand';
import ProductsByCollection from './routes/products-by-collection/products-by-collection';
import ProductDetails from './routes/product-details/product-details';
import Cart from './routes/cart/cart';

import './App.css';

function App() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin; 

  return (
    <BrowserRouter>
    <Header />
    <div className="main-content-wrapper">
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="/sign-in-register/" element={
            userInfo ? <Navigate to="/" />
            : <SignInRegisterPage />} />
          <Route path="/products/" element={<ProductCategoriesPage />} />
          <Route path="/products/:category" element={<ProductsByCategory />} />
          <Route path="/products/:category/:product" element={<ProductDetails />} />
          <Route path="/brands/*" element={<ProductsByBrand />} />
          <Route path="/collection/*" element={<ProductsByCollection />} />
          <Route path="/cart/" element={<Cart />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;


