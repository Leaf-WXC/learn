import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Greeting extends Component {
    render() {
      return (
        <div>  
            <h1>{`hello ${this.props.who}`}</h1> 
        </div>
      );
    }
}
      const App=(props,context)=>{
        return (
          <div>
            <Greeting who={'world'} />
            <Greeting who={'react'} />
          </div>
        )
      }    
ReactDOM.render(<App />, document.getElementById('root'));

