import React, { useState } from "react";
import "./App.css";
import { GameContext } from "./utils/Context";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./components/Main";
import Quiz from "./components/Quiz";

function App() {
  const queryClient = new QueryClient();
  const [gameState, setGameState] = useState("Home");
  const [userName, setUserName] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [questionNo, setQuestionNo] = useState(0);
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
            questionList,
            setQuestionList,
            questionNo,
            setQuestionNo,
          }}
        >
          {gameState === "Home" && <Main />}
          {gameState === "Playing" && userName !== "" && <Quiz />}
        </GameContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
