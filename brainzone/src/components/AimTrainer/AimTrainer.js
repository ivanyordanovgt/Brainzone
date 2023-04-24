import React, { useState } from 'react'
import { Target } from './Target'
import styles from './aimTrainer.module.css'
import useTimer from '../../hooks/timer'


export const AimTrainer = () => {
  const defaultRandom = {
    'x': 700,
    'y': 50,
  }
  const [random, setRandom] = useState(defaultRandom);
  const [gameStarted, setGameStarted] = useState(false);
  const {startTimer, timePassed} = useTimer();
  const [roundTime, setRoundTime] = useState(5);
  const [points, setPoints] = useState(0);
  const [secondsPassed, setSecondsPassed] = useState(0);
  const [clickedOuterColor, setClickedOuterColor] = useState({
    'red': 0,
    'blue': 0,
    'white': 0,
    'gold': 0,
    'black': 0,
  }) 

  function startGame() {
    startTimer();
    setGameStarted(true);
    onTargetClick('white', 1);
    const secondsInterval = setInterval(() => setSecondsPassed(s => s+1), 1000)
    setClickedOuterColor({'red': 0,'blue': 0,'white': 0,'gold': 0,'black': 0})

    setTimeout(() => {
      setGameStarted(false)
      setRandom(defaultRandom)
      clearInterval(secondsInterval)
      setSecondsPassed(0)
    }, roundTime*1000)
  }

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
        <h4>{gameStarted ? `${secondsPassed}s`: ''}</h4>
          
          {!gameStarted ? <div>
          <h2>Click the target to start! </h2>
          <h2>Choose custom time if you want</h2>
          <input type='number' value={roundTime} onChange={onRoundTimeChange}></input>
          <span className={styles.second}>seconds</span>
          <h3>The closer to the center you click the more points you earn!</h3>
        </div>: ''}

        <div style={{marginLeft: random.x, marginTop: random.y}}>
        <Target onClick={!gameStarted ? startGame: onTargetClick}></Target>
        </div>
      </div>
    </div>
  )
}
