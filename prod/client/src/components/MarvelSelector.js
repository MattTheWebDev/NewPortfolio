import React from "react";
import Projectnav from "./Projectnav";
import MarvelMovie from "./MarvelMovie";
class MarvelSelector extends React.Component {
  constructor() {
    super();
    this.resultPrint = this.resultPrint.bind(this);
  }

  resultPrint = () => {
    if (document.getElementsByClassName("resultGrid").length === 0) {
      let k = -1;
      let results = Array.from(
        document.querySelectorAll(".notSelected:not(.selectedMovie)")
      );
      let resultsArray = results.map((a) => a.outerHTML);
      for (let i = 0; i < resultsArray.length / 4; i++) {
        const resultGrid = document.createElement("div");
        resultGrid.className = "resultGrid";
        document.getElementsByClassName("results")[0].appendChild(resultGrid);
      }
      for (let j = 0; j < resultsArray.length; j++) {
        const resultsItem = document.createElement("div");
        resultsItem.className = "resultsItem";
        resultsItem.innerHTML = resultsArray[j];
        if (j === 0 || (j % 6 === 0 && k < 4)) {
          k++;
        }
        document
          .getElementsByClassName("resultGrid")
          [k].appendChild(resultsItem);
      }
    }
  };

  clearResults = () => {
    const selectResults = document.querySelector(".results");
    selectResults.innerHTML = "";
  };

  render() {
    return (
      <div className="marvelHolder">
        <Projectnav></Projectnav>
        <div className="marvelContainer">
          <div className="marvelHeader">
            <h1>Marvel Selector App</h1>
            <p>
              Simply select the movies you have seen, hit the results button,
              and it will show you what you need to watch in order!
            </p>
          </div>
          <div className="marvelHeader">
            <h2>Phase One</h2>
          </div>
          <div className="marvelGrid">
            <div className="marvelItem">
              <MarvelMovie id={0}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={1}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={2}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={3}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={4}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={5}></MarvelMovie>
            </div>
          </div>
          <div className="marvelHeader">
            <h2>Phase Two</h2>
          </div>
          <div className="marvelGrid">
            <div className="marvelItem">
              <MarvelMovie id={6}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={7}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={8}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={9}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={10}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={11}></MarvelMovie>
            </div>
          </div>
          <div className="marvelHeader">
            <h2>Phase Three</h2>
          </div>
          <div className="marvelGrid">
            <div className="marvelItem">
              <MarvelMovie id={12}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={13}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={14}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={15}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={16}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={17}></MarvelMovie>
            </div>
          </div>
          <div className="marvelHeader">
            <h2>Phase Four</h2>
          </div>
          <div className="marvelGrid">
            <div className="marvelItem">
              <MarvelMovie id={18}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={19}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={20}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={21}></MarvelMovie>
            </div>
            <div className="marvelItem">
              <MarvelMovie id={22}></MarvelMovie>
            </div>
          </div>
          <div className="marvelHeader">
            <h2>Results</h2>
          </div>
          <div className="results"></div>
          <div className="marvelButtonHolder">
            <div>
              <button className="marvelButton" onClick={this.resultPrint}>
                Get Results
              </button>
            </div>
            <div>
              <button className="marvelButton" onClick={this.clearResults}>
                Clear The Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarvelSelector;
