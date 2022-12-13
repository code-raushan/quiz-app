import React, { useState, useContext, useEffect} from 'react'
import { GameContext } from '../utils/Context'
import axios from 'axios'

const Quiz = () => {
    const url = 'https://the-trivia-api.com/api/questions?categories=history&limit=10'
    const [list, setList]=useState()
    const {userName}=useContext(GameContext);
    const [questionNo, setQuestionNo]=useState(0)
    const [question, setQuestion]=useState('')
    console.log(list)
      return (
    <div className='Quiz'>
        <div className='header'>
            <div>Hello {userName}</div>
            {questionNo===9?<div><button>Submit Quiz</button></div>:<div><button>Finish Quiz</button></div>}
        </div>
        <div className="pagination">
            pagination
        </div>
    </div>
  )
}

export default Quiz