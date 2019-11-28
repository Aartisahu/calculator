import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from './ KeyPadComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
        this.reset = this.reset.bind(this);
        this.calculate = this.calculate.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick(button) {

      if(button === "="){
          this.calculate()
      }

      else if(button === "Clear"){
          this.reset()
      }
       else {
          this.setState({
              result: this.state.result + button
          })
      }
  };

    calculate() {
      try {
          this.setState({
              result: (eval(this.state.result) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset(){
      this.setState({
          result: "" })
  };


  render() {
      return (
          <div>
              <div className="calculator-body">
              <center>
                  <h1>Simple Calculator</h1></center>
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;