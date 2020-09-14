import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop-component';
import { Homepage } from './pages/homepage/homepage-component';
import Header from './components/header/header.component';
import SignInUp from './pages/signInRegisterPage/signInRegister.component';


function App() {
  return (
    <div>
      <Header></Header>
      <Route exact path='/shop' component={ShopPage}></Route>
      <Route exact path='/signin' component={SignInUp}></Route>
      <Route exact path='/' component={Homepage}></Route>
      
    </div>
  );
}

export default App;
