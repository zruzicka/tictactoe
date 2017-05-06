import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message : "TicTacToe!",
      PLAYER_ONE_SYMBOL : 'X',
      PLAYER_TWO_SYMBOL : '0',
      currentTurn : '',
      winningCombos : [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
      board : ["", "", "", "", "", "", "", "", ""]
    }
  }

  handleClick(index) {
    this.state.currentTurn = this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL;
    this.state.board[index] = this.state.currentTurn;
    this.setState({
      currentTurn : this.state.currentTurn,
    });
    console.log(index);
  }

  render() {
    return (
      <div className='board'>
      {this.state.board.map((cell, index) => {
        return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
      })}
      </div>
    )

  }
}


  export default App;

