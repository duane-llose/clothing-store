import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthenticationPage from './pages/authentication/AuthenticationPage';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    }); 
  }

  unscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop/' component={ShopPage}></Route>
          <Route path='/authenticate' component={AuthenticationPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
