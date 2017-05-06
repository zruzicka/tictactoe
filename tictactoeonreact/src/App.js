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
      board : ["", "", "", "", "", "", "", "", ""],
      turn : 1,
      gameOver : false  
    }
  }

  handleClick(index) {
    if(this.state.board[index] !== "" || this.state.gameOver) {
        return; // No update needed.
    }
    var currentTurn = this.getNextSymbol();
    var board = this.state.board;
    board[index] = currentTurn;
    this.setState({
      currentTurn : currentTurn,
      board: board
    });

    this.setState({
      turn: this.state.turn + 1
    });
    console.log("turn: " + this.state.turn);

    var symbols = this.state.board;
    console.log("symbols: " + symbols);

    var winningCombo = this.checkForWinner(symbols);
    if (winningCombo) {
      this.setState({
        gameOver: true
      });
      console.log("(turn:"+this.state.turn+"; winningCombo:"+winningCombo+"; symbol:"+symbols[winningCombo[0]]+")");
      alert("Symbol '"+symbols[winningCombo[0]]+"' won!");
    }
  }

  getNextSymbol() {
    return this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL;
  }

  checkForWinner(symbols) {
    return this.state.winningCombos.find(function(combo) {
        if(symbols[combo[0]] == symbols[combo[1]] && symbols[combo[1]] == symbols[combo[2]]) {
          return symbols[combo[0]];
        } else {
          return false;
        }
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
        return <div onClick={() => this.handleClick(index)} className="square" key={index}>{cell}</div>;
      })}
      </div>
      </center>

      <p>Game status: {this.getGameStatus()}</p>

      </div>
    )

  }

  getGameStatus() {
    return !this.state.gameOver ? "running" : "finished";
  }

}


  export default App;

