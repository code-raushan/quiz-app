import React, { useState } from "react";
import "./App.css";
import { GameContext } from "./utils/Context";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Final from "./components/Final";

function App() {
  const queryClient = new QueryClient();
  const [gameState, setGameState] = useState("Home");
  const [userName, setUserName] = useState("");
  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore]=useState(0)
  const [questionSet, setQuestionSet]=useState([])
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <h1>Check Your Understanding😉</h1>
        <GameContext.Provider
          value={{
            gameState,
            setGameState,
            userName,
            setUserName,
            score, 
            setScore,
            questionNo,
            setQuestionNo,
            questionSet,
            setQuestionSet
          }}
        >
          {gameState === "Home" && <Main />}
          {gameState === "Playing" && userName !== "" && <Quiz />}
          {gameState === "Finished" && <Final/>}
        </GameContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
