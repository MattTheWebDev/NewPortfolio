import React from "react";
import Projectnav from "./Projectnav";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currInput: "0",
      secondInput: "",
      calcHistory: "",
      calcTotal: "",
    };
  }
  onCalcButtonPress = (e) => {
    let calcButtonValue = e.target.value;
    let total = 0;
    let calcTotal = this.state.calcHistory;
    
    e.preventDefault();
    switch (calcButtonValue) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if (calcTotal === "") {
          this.setState({
            currInput: calcButtonValue,
            calcHistory: this.state.calcHistory.concat(calcButtonValue),
          });
          
        } else {
          this.setState({
            calcHistory: this.state.calcHistory.concat(calcButtonValue),
            currInput: this.state.currInput + calcButtonValue - 0,
          });
          
        }
        console.log(calcTotal)
        break;
      case ".":
        if (calcTotal.indexOf(".") < 0) {
          this.setState({
            calcHistory: this.state.calcHistory.concat(calcButtonValue),
            currInput: calcButtonValue,
          });
        }
        break;
      case "+":
      case "-":
      case "/":
      case "*":
        this.setState({
          currInput: 0,
          secondInput: calcTotal + calcButtonValue,
          calcHistory: this.state.calcHistory.concat(calcButtonValue),
        });
        break;
      case "AC":
        this.setState({
          currInput: "0",
          secondInput: "",
          calcHistory: "",
        });
        break;
      case "C": {
        console.log(calcTotal)
        if (calcTotal > 0) {
          calcTotal = calcTotal.slice(0, -1);
          this.setState({
            currInput: calcTotal,
            calcHistory: calcTotal
          });
        }
        else {
          this.setState({
            currInput: "0",
            calcHistory: "0"
          });
        }
      }
      break;
      case "=": {
        if (
          this.state.calcHistory.endsWith("+") !== true &&
          this.state.calcHistory.endsWith("-") !== true &&
          this.state.calcHistory.endsWith("/") !== true &&
          this.state.calcHistory.endsWith("*") !== true &&
          isNaN(this.state.calcHistory) === true
        ) {
          
          total += eval(calcTotal) + 0;
          this.setState({
            currInput: total,
            secondInput: calcTotal + "=",
            calcHistory: "",
          });
          console.log('i ran')
        }
       else if (isNaN(this.state.calcHistory) === false && calcTotal !== '') {
        this.setState ({
          currInput: calcTotal,
          secondInput: calcTotal,
        })
       }
       else if (isNaN(this.state.calcHistory) === false) {
        this.setState ({
          currInput: 0,
          secondInput: 0,
        })
       }
        else {
          total += eval(calcTotal + 0);
          this.setState({
            currInput: total,
            secondInput: calcTotal + "0" + "=",
          });
        }
        break;
      }
      default:
    }
  };
  render() {
    return (
      <div className="calcHolder">
        <Projectnav></Projectnav>
        <h1>Simple Calculator</h1>
        <div className="calcBody">
          <br />
          <div className="calcDisplay">
            <p>{this.state.secondInput}</p>
            <p>{this.state.currInput}</p>
          </div>
          <br />
          <div className="calcButtons">
            <button
              value="1"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              1
            </button>
            <button
              value="2"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              2
            </button>
            <button
              value="3"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              3
            </button>
            <button
              value="+"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              +
            </button>
            </div>
            <div className='calcButtons'>
            <button
              value="4"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              4
            </button>
            <button
              value="5"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              5
            </button>
            <button
              value="6"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              6
            </button>
            <button
              value="-"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              -
            </button>
            </div>
            <div className='calcButtons'>
            <button
              value="7"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              7
            </button>
            <button
              value="8"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              8
            </button>
            <button
              value="9"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              9
            </button>
            <button
              value="/"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              &divide;
            </button>
            </div>
            <div className='calcButtons'>
            <button
              value="."
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              .
            </button>
            <button
              value="0"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              0
            </button>
            <button
              value="AC"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              AC
            </button>
            <button
              value="*"
              className="calcButton"
              onClick={this.onCalcButtonPress}
            >
              *
            </button>
            </div>
            <div className='calcButtons'>
            <button
              value="C"
              className="longBTN calcButton"
              onClick={this.onCalcButtonPress}
            >
              C
            </button>
            <button
              value="="
              className="longBTN calcButton"
              onClick={this.onCalcButtonPress}
            >
              =
            </button>
            </div>
          </div>
        </div>

    );
  }
}

export default Calculator;
