import React, { useState } from 'react'
import { Target } from './Target'
import styles from './aimTrainer.module.css'
export const AimTrainer = () => {
  const [random, setRandom] = useState({
    'x': 700,
    'y': 50,
  })
  const [roundTime, setRoundTime] = useState(5)
  const [points, setPoints] = useState(0)
  const [clickedOuterColor, setClickedOuterColor] = useState({
    'red': 0,
    'blue': 0,
    'white': 0,
    'gold': 0,
    'black': 0,
  }) 

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

  function onRoundTimeChange(e) {
    const value = Number(e.target.value)
    if (value > 30 ) setRoundTime(30)
    else if (value < 5) setRoundTime(5)
    else setRoundTime(value)
  }

  return (
    <div >
      <div className={styles.stats}>{Object.entries(clickedOuterColor).map((entry, a) => {
        const color = entry.slice(0, entry.length-1);
        return <h1 style={{color: `${color}`}}>{String(entry)[0]}{entry.slice(-1)} </h1>
      })} 
      <h2>Current points {points ? points: '0'}</h2>

      </div>

      <div className={styles.aimTrainer}>
        <h1>1</h1>
        {points===0 ? <div>
          <h2>Click the target to start! </h2>
          <h2>Choose custom time if you want</h2>
          <input type='number' value={roundTime} onChange={onRoundTimeChange}></input>
          <span className={styles.second}>seconds</span>
          <h3>The closer to the center you click the more points you earn!</h3>
        </div>: ''}

        <div style={{marginLeft: random.x, marginTop: random.y}}>
        <Target onClick={onTargetClick}></Target>
        </div>
      </div>
    </div>
  )
}
