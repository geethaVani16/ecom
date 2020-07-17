import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatPage} />
        <Route path='/topics' component={TopicsList}/>
        <Route extact path='/topics/:topicId' component={TopicsDetails}/>
      </Switch>

      {/* <HomePage/> */}
    </div>
  );
}

export default App;


const HatPage = () => {
  return (
    <h1>
      hatPage
    </h1>
  )
}


const TopicsList = (props) => {
  console.log(props,"props")
  return (
    <h1>
      TopicsList
    </h1>
  )
}


const TopicsDetails = (props) => {
  console.log(props,"props")
  return (
    <>
    <p>{props.params.match.topicId}</p>
    <h1>
      TopicsDetails
    </h1>
    </>
  )
}
