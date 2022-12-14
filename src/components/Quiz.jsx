/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { GameContext } from "../utils/Context";
import axios from "axios";
import { useQuery } from "react-query";

const Quiz = () => {
  const url =
    "https://the-trivia-api.com/api/questions?categories=history&limit=10";
  const { userName, questionNo, setQuestionNo } = useContext(GameContext);

  const getQuestion = async () => {
    const result = await axios.get(url);
    const list = result.data;
    return list;
  };
  const { data, isLoading, error } = useQuery("getQuestions", getQuestion);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed...</div>;

  return (
    <div className="Quiz">
      <div className="header">
        <div>Hello {userName}</div>
        {questionNo === 9 ? (
          <div>
            <button>Submit Quiz</button>
          </div>
        ) : (
          <div>
            <button>Finish Quiz</button>
          </div>
        )}
      </div>

      <div>
        {data[questionNo].question}
        {data.length}
      </div>

      <div className="pagination">
        {questionNo !== 0 && (
          <div>
            <button
              onClick={() => {
                setQuestionNo((no) => no - 1);
              }}
            >
              Previous
            </button>
          </div>
        )}
        {questionNo !== 9 && (
          <div>
            <button
              onClick={() => {
                setQuestionNo((no) => no + 1);
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div>{questionNo}</div>
    </div>
  );
};

export default Quiz;
