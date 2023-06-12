import React, { useContext, useState } from 'react'
import RocketAnimation from '../RocketAnimation/RocketAnimation'
import styles from './crashGamble.module.css'
import rocket from '../../../../images/crashGame/rocket.png'
import { MoneyContext } from '../../contexts/MoneyContext'
import StarAnimation from './StarAnimation'
import BetMenu from './BetMenu'
export const CrashGamble = () => {
  const starSpeed = {
    'slow': 1,
    'medium': 0.7,
    'fast': 0.2,
  }
  const {money, setMoney} = useContext(MoneyContext);
  const [multiplier, setMultiplier] = useState(1.00);
  const [starHeightMultiplier, setStarHeightMutliplier] = useState(3)
  const [starAnimationDuration, setStarAnimationDuration] = useState(starSpeed.slow)
  const [rocketMargin, setRocketMargin] = useState(60)

  function startCrash() {
    let timeOut = 500;

    for (let i=0; i < 7; i++) {
      setTimeout(() => {
        console.log("CYCLE")
        setStarAnimationDuration(state => state-0.1)
        setStarHeightMutliplier(state => state+=5)

      }, timeOut);
      timeOut += 500;
    }

    const crashEnd = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    timeOut = 300
    for (let i = 101; i < crashEnd; i++) {
      setTimeout(() => {
        setMultiplier(i/100)
      }, timeOut)
      timeOut += 300;
    }

    
  };

  function endCrash() {

  }

  return (
    <>
        <div className={styles.crashGambleWrapper}>
         <BetMenu money={money} startCrash={startCrash}></BetMenu>
        
          <div className={styles.rocketGameWrapper}>
              <div className={styles.rocketWrapper}>
              <h1>CRASH GAMBLE</h1>
              <h2 className={styles.betMultiplierNum}>{multiplier.toFixed(2)}x</h2>
              
            <div className={styles.rocketDiv}>
                      <StarAnimation starAnimationDuration={starAnimationDuration} starHeightMultiplier={starHeightMultiplier}></StarAnimation>
                      <div className={styles.rocket} style={{marginTop: `${rocketMargin}vh`, animationDuration: '1s'}}>
                          <img src={rocket}></img>
                      </div>
                </div>
              </div>
            
          </div>
        </div>


    </>
  )
}
