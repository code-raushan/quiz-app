import React, { useContext } from "react";
import { GameContext } from "../utils/Context";

const Main = () => {
  const { setGameState, userName, setUserName } =
    useContext(GameContext);
  return (
    <div className="Main">
        
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div style={{ margin: 2, fontWeight: 500, fontSize: 15 }}>Welcome to Quiz😀</div>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            if (userName === "") {
              alert("please provide a User Name");
              setGameState("Home");
            } else {
              setGameState("Playing");
            }
          }}
        >
          Enter the Quiz
        </button>
      </form>
    </div>
  );
};

export default Main;
