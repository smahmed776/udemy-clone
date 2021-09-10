import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="container-fluid p-0 vw-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
