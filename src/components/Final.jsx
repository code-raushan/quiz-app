import React, {useContext} from 'react'
import { GameContext } from '../utils/Context'


const Final = () => {
    const {score, userName}=useContext(GameContext)
    
  return (
    <div>
        <h1>Hey {userName}</h1>
        <h2>You scored {score<0?'0':score}</h2>
    </div>
  )
}

export default Final