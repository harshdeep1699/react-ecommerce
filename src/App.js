import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop-component';
import { Homepage } from './pages/homepage/homepage-component';
import Header from './components/header/header.component';
import SignInUp from './pages/signInRegisterPage/signInRegister.component';
import { auth, createUserDocument } from './firebase/firebase.util';


class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }

  unsub=null;
  componentDidMount(){
    this.unsub=auth.onAuthStateChanged(async user=>{this.setState({currentUser:user})
      ;createUserDocument(user)})
     
  };
    
  
componentWillUnmount()
{
  this.unsub();

}

  render(){
      return(
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' component={SignInUp}></Route>
        <Route exact path='/' component={Homepage}></Route>
        
      </div>
    
  )
      }
  

}

export default App;
