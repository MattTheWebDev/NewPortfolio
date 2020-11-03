import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MarvelSelector from "./MarvelSelector";
import CookingApp from "./CookingApp"
import Calculator from "./Calculator";

class Work extends React.Component {
  render() {
    return (
      <div className="workDiv">
        <div className="workDivInner">
          <div className="workContainer">
            <div className="workHolder">
              <div className="workItem">
                <Link to="/marvelapp">Work 1</Link>
              </div>
              <div className="workItem">
                <Link to="/cookingapp">Work 2</Link>
              </div>
              <div className="workItem">
              <Link to="/calculator">Work 3</Link></div>
              <div className="workItem">Work 4</div>
              <div className="workItem">Work 5</div>
              <div className="workItem">Work 6</div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="marvelapp" component={MarvelSelector} />
          <Route path="cookingapp" component={CookingApp} />
          <Route path='calculator' component={Calculator} />
        </Switch>
      </div>
    );
  }
}

export default Work;
