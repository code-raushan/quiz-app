import React, {useContext} from 'react'
import { GameContext } from '../utils/Context'


const Final = () => {
    const {score, userName, questionSet}=useContext(GameContext)
    
  return (
    <div>
        <h1>Hey {userName}</h1>
        <h2>You scored {score<0?'0':score}</h2>
        <h1>Correct Answers of the quiz:</h1>
        <div>
            {questionSet.map(question=>(
              <div>
                <h3>{question.question}</h3>
                <h4>Correct Answer is: {question.correctAnswer}</h4>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Final