import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GameDetails } from './types';

function App() {
  
  const gameDetails: GameDetails = {
    isOngoing: false,
    gameMode: 1,
    marks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    moveCount: 0,
  };

  console.log(gameDetails);
  return (
    <div className="App">
      <header className="App-header">
        <button>
          Single Player
        </button>
        <button onClick = { () => console.log(gameDetails) }>
          Two Players
        </button>
      </header>
    </div>
  );
}

export default App;
