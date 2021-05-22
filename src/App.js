import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthenticationPage from './pages/authentication/AuthenticationPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux'; 

import { setCurrentUser } from './redux/user/userActions';

import { selectCurrentUser } from './redux/user/userSelectors';

import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  constructor(props) {
    super(props);
  //   this.state = {
  //     currentUser: null
  //   };
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
     
    }); 
  }

  unscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop/' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          {/* {this.props.currentUser ? <Redirect to="/"></Redirect> : <Route exact path='/authenticate' component={AuthenticationPage} />  } */}
          <Route exact path='/authenticate' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<AuthenticationPage />)}></Route>
        </Switch>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.user.currentUser
//   }; 
// }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = function(dispatch) {
  return {
    setCurrentUser: function (user) {
      console.log('user', user);

      return dispatch(setCurrentUser(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
