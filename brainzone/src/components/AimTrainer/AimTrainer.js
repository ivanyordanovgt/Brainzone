import React, { useState } from 'react'
import { Target } from './Target'
import styles from './aimTrainer.module.css'
export const AimTrainer = () => {
  const [random, setRandom] = useState({
    'x': 700,
    'y': 150,
  })
  const [points, setPoints] = useState(false)
  const [clickedOuterColor, setClickedOuterColor] = useState({}) 
  function onTargetClick(outerColor, bonusPoints) {
    setPoints(p => p+bonusPoints)
    const [x, y] = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 320)]
    setRandom({x: x, y: y})
    if (clickedOuterColor[outerColor]) {
      setClickedOuterColor(state => ({...state, [outerColor]: clickedOuterColor[outerColor]+1 }))
    } else {
      setClickedOuterColor(state => ({...state, [outerColor]: 1}))
    }
    console.log(clickedOuterColor)
  }

  return (
    <div >
      {points ? `Current points ${points}`: `Click start to begin!`}

      <div className={styles.aimTrainer}>
        <h1>1</h1>
        <div style={{marginLeft: random.x, marginTop: random.y}}>
        <Target onClick={onTargetClick}></Target>
        </div>
      </div>
    </div>
  )
}
