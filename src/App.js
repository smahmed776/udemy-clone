import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Cart from './components/Header/cart';
import Header from './components/Header/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="container-fluid p-0 vw-100">
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
