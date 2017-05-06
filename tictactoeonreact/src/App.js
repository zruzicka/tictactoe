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
    var currentTurn = this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL;
    var board = this.state.board;
    board[index] = currentTurn;
    this.setState({
      currentTurn : currentTurn,
      board: board
    });
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 onClick={()=> this.setState({message:this.state.message+"!"})}>{this.state.message}</h2>
      </div>

      <center>
      <div className='board'>
      {this.state.board.map((cell, index) => {
        return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
      })}
      </div>
      </center>

      </div>
    )

  }
}


  export default App;

