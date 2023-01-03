import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';

import SignIn from './screens/Account/SignIn/SignIn';
import Register from './screens/Account/Register/Register';

import Homepage from './screens/Homepage/Homepage';
import ProductCategoriesPage from './screens/Products/ProductCategories/ProductCategories';
import ProductDetails from './screens/Products/ProductDetails/ProductDetails';
import ProductsByCategory from './screens/Products/ProductsByCategory/ProductsByCategory';
import ProductsBySubcategory from './screens/Products/ProductsBySubcategory/ProductsBySubcategory';
import ProductsByBrand from './screens/Products/ProductsByBrand/ProductsByBrand';

import Cart from './screens/Cart/Cart';
import ShippingAddress from './screens/Account/Orders/ShippingAddress/ShippingAddress';
import Order from './screens/Account/Orders/PreviewOrder/PreviewOrder';
import OrderDetails from './screens/Account/Orders/OrderDetails/OrderDetails';
import OrderHistory from './screens/Account/Orders/OrderHistory/OrderHistory';
import Account from './screens/Account/Account/Account';
import Dashboard from './screens/Admin/Dashboard/Dashboard';
import ProductList from './screens/Admin/ProductList/ProductList';
import CreateProduct from './screens/Admin/CreateProduct/CreateProduct';
import EditProduct from './screens/Admin/EditProduct/EditProduct';
import OrderList from './screens/Admin/OrderList/OrderList';
import UsersList from './screens/Admin/UsersList/UsersList';
import EditUser from './screens/Admin/EditUser/EditUser';

import Admin from './components/admin/admin/Admin';
import Protected from './components/admin/protected/Protected';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products/" element={<ProductCategoriesPage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/products/:category/:subcategory/:slug"
                element={<ProductDetails />}
              />
              <Route
                path="/products/:category"
                element={<ProductsByCategory />}
              />
              <Route
                path="/products/:category/:subcategory"
                element={<ProductsBySubcategory />}
              />
              <Route
                path="/products/brands/:brand"
                element={<ProductsByBrand />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shipping" element={<ShippingAddress />} />
              <Route
                path="/order"
                element={
                  <Protected>
                    <Order />
                  </Protected>
                }
              />
              <Route
                path="/order/:id"
                element={
                  <Protected>
                    <OrderDetails />
                  </Protected>
                }
              />
              <Route path="/order-history" element={<OrderHistory />}></Route>
              <Route
                path="/account"
                element={
                  <Protected>
                    <Account />
                  </Protected>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <Admin>
                    <Dashboard />
                  </Admin>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <Admin>
                    <OrderList />
                  </Admin>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <Admin>
                    <UsersList />
                  </Admin>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <Admin>
                    <EditUser />
                  </Admin>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <Admin>
                    <ProductList />
                  </Admin>
                }
              ></Route>
              <Route
                path="/admin/products/create-product"
                element={
                  <Admin>
                    <CreateProduct />
                  </Admin>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <Admin>
                    <EditProduct />
                  </Admin>
                }
              ></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
