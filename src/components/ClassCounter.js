import React, { Component } from 'react';

export default class ClassCounter extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    };
  }
*/

  state = {
    counter: 0,
    fixed: 1,
    updateMe : {
      toggleMe : false,
      donChangeMe : 1,
    }
  };

  //class properties
  handleIncrease = () => {
    //console.log('increase');
    // 클래스형 컴포넌트에서 state 는 반드시 객체여야한다.
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    //console.log('decrease');
    this.setState({
      counter: this.state.counter - 1,
    });
  };

handleToggle = () => {
  this.setState({
    updateMe : {
     ...this.state.updateMe,
      toggleMe :!this.state.updateMe.toggleMe
    }
  });
}

  render() {
    return (
      <div>
        <h1 className="text-2xl">{this.state.counter}</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
          onClick={this.handleIncrease}
        >
          +1
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={this.handleDecrease}
        >
          -1
        </button>
        <p>{this.state.fixed}</p>
      </div>
    );
  }
}
