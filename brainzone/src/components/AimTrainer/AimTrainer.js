import React, { useState } from 'react'
import { Target } from './Target'

export const AimTrainer = () => {

  const [points, setPoints] = useState(false)
  const [clickedOuterColor, setClickedOuterColor] = useState({}) 
  function onTargetClick(outerColor, bonusPoints) {
    setPoints(p => p+bonusPoints)
    // if (clickedOuterColor[outerColor]) {
    //   setClickedOuterColor(state => )
    // }
    if (clickedOuterColor[outerColor]) {
      setClickedOuterColor(state => ({...state, [outerColor]: clickedOuterColor[outerColor]+1 }))
    } else {
      setClickedOuterColor(state => ({...state, [outerColor]: 1}))
    }
    console.log(clickedOuterColor)
  }

  return (
    <div>
        {points ? `Current points ${points}`: `Click start to begin!`}
        <div style={{marginLeft: '70vw'}}>
        <Target onClick={onTargetClick}></Target>
        </div>
    </div>
  )
}
