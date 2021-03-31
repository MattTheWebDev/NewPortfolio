// Import the React and React DOM Libraries
import React from "react";
import ReactDOM from "react-dom";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import MarvelSelector from './components/MarvelSelector'
import CookingApp from "./components/CookingApp"




//Create a react component
const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/marvelapp" component={MarvelSelector} />
          <Route exact path="/cookingapp" component={CookingApp} />
        </Switch>
      </Router>
      
    </main>
  );
};
// Take the react componenet to show up on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
