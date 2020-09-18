import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './Pages/Shop/ShopPage.Component';
import HeaderComponent from './Components/Header/Header.Component';
import SignInSignUp from './Pages/Sign-In-Sign-Up/Sign-In-Sign-Up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/user.actions'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })

      }
      else {
        this.props.setCurrentUser({ userAuth })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render ={() => this.props.currentUser ? <Redirect to='/' /> :<SignInSignUp/>}  />
        </Switch>

      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);








