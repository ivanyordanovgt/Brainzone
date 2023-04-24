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
    const colorString = `${outerColor}`
    setClickedOuterColor(state => ({...state, [outerColor]: `${outerColor}`}))
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
