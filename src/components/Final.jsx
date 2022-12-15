import React, {useContext} from 'react'
import { GameContext } from '../utils/Context'


const Final = () => {
    const {score}=useContext(GameContext)
  return (
    <div>{score}</div>
  )
}

export default Final