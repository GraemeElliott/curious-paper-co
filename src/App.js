import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/partials/header/header";
import Footer from "./components/partials/footer/footer";
import Homepage from "./pages/homepage/homepage";
import SignInPage from "./pages/account/sign-in-register/sign-in";
import ProductsPage from "./pages/products-directory/products-directory";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/products" component={ProductsPage} />
          {/* <Route path="/products/id" component={} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
