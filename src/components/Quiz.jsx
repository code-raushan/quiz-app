import React, { useContext } from "react";
import { GameContext } from "../utils/Context";
import axios from "axios";
import { useQuery } from "react-query";
import Options from "./Options";
const Quiz = () => {
  const url =
    "https://the-trivia-api.com/api/questions?categories=history&limit=10";
  const { setGameState, userName, questionNo, setQuestionNo, setQuestionSet } =
    useContext(GameContext);

  const getQuestion = async () => {
    const result = await axios.get(url);
    const list = result.data;
    return list;
  };
  const { data, isLoading, error } = useQuery("getQuestions", getQuestion);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed...</div>;
  setQuestionSet(data)
  return (
    <div className="Quiz">
      <div className="header">
        <div className="user-name">Hello {userName}</div>
        {questionNo === 9 ? (
          <div>
            <button
              className="header-btn"
              onClick={() => {
                setGameState("Finished");
              }}
            >
              Submit Quiz
            </button>
          </div>
        ) : (
          <div>
            <button
              className="header-btn"
              onClick={() => {
                setGameState("Finished");
              }}
            >
              Finish Quiz
            </button>
          </div>
        )}
      </div>

      <div className="Questions">
        <div className="question-header">{data[questionNo].question}</div>
        <div className="options">
          <Options question={{ questionNo, data }} />
        </div>
      </div>

      <div className="pagination">
        <div>
          {questionNo !== 0 && (
            <div>
              <button
              className="pagination-btn"
                onClick={() => {
                  setQuestionNo((no) => no - 1);
                }}
              >
                Previous
              </button>
            </div>
          )}
        </div>
        <div className="question-no">{questionNo + 1}</div>
        <div>
          {questionNo !== 9 && (
            <div>
              <button
              className="pagination-btn"
                onClick={() => {
                  setQuestionNo((no) => no + 1);
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Quiz;
