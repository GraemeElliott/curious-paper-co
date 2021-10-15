import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Header from "./components/partials/header/header";
import Footer from "./components/partials/footer/footer";
import Homepage from "./pages/homepage/homepage";
import SignInPage from "./pages/account/sign-in-register/sign-in";
import ProductsDirectoryPage from "./pages/products-directory/products-directory";
import ProductsPage from './pages/products/products';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sign-in" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          <Route exact path="/products" component={ProductsDirectoryPage} />
          <Route exact path="/all-products" component={ProductsPage} />
          {/* <Route path="/products/id" component={} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
