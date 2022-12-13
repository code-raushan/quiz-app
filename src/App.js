import React, {useState} from 'react';
import './App.css';
import { GameContext } from './utils/Context';
import Main from './components/Main';
import Quiz from './components/Quiz';

function App() {
  const [gameState, setGameState]=useState('Home');
  const [userName, setUserName]=useState('');
  return (
    <div className="App">
      <h1>Check Your Understanding😉</h1>
      <GameContext.Provider value={{gameState, setGameState, userName, setUserName}}>
        {gameState==='Home' && <Main/>}
        {gameState==='Playing' && userName!=='' && <Quiz/>}

      </GameContext.Provider>
      
      
    </div>
  );
}

export default App;
