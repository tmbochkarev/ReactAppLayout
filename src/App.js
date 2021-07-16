import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
    <div class="line"></div>
    <div class="wrapper"> 
    <Header />
    <Main />
    <Footer />
    </div> 
    <div class="line"></div>
    </>
  );
}

export default App;
