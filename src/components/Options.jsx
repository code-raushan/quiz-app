import React, { useContext, useState } from "react";
import { GameContext } from "../utils/Context";
const Options = (props) => {
  const { questionNo, data } = props.question;
  const { setScore } = useContext(GameContext);
  const [checked, setChecked]=useState(false)
  const options = [...data[questionNo].incorrectAnswers];

  const randomIndex = Math.floor(Math.random() * 4);

  options.splice(randomIndex, 0, data[questionNo].correctAnswer);
  return (
    <div className="Options">
      {options.map((elem) => {
        return (
          <button
          className="option"

            onClick={() => {
                if(checked===true){
                    if(elem!==data[questionNo].correctAnswer){
                        setScore((score)=>score-1)
                    }else{
                        setScore((score)=>score+1)
                    }
                }
                if(checked===false){
                    if (elem === data[questionNo].correctAnswer) {
                        setScore((score) => score + 1);
                      }
                }
                setChecked(true)
                
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
