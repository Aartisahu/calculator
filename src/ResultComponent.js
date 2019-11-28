import React, {Component} from 'react';
import './App.js';
class ResultComponent extends Component {
          render() {
        let result = this.props.result;
        return (
            <div Name="result">
            <center>
                <h3>{result}</h3></center>
            </div>
        );
    }
}
export default ResultComponent;