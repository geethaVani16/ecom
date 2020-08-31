import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/Shop/ShopPage.Component';
import HeaderComponent from './Components/Header/Header.Component';
import SignInSignUp from './Pages/Sign-In-Sign-Up/Sign-In-Sign-Up';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user, "user")
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {

    return (
      <div className="App">
        <HeaderComponent currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route exact path='/hats' component={HatPage} /> */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
          {/* <Route extact path='/topics/:topicId' component={TopicsDetails} /> */}
        </Switch>

        {/* <HomePage/> */}
      </div>
    );
  }
}

export default App;







const TopicsDetails = (props) => {
  console.log(props, "props")
  return (
    <>
      <p>{props.params.match.topicId}</p>
      <h1>
        TopicsDetails
    </h1>
    </>
  )
}
