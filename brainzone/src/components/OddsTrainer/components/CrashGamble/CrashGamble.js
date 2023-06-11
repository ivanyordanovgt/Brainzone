import React, { useContext, useState } from 'react'
import RocketAnimation from '../RocketAnimation/RocketAnimation'
import styles from './crashGamble.module.css'
import rocket from '../../../../images/crashGame/rocket.png'
import { MoneyContext } from '../../contexts/MoneyContext'
import StarAnimation from './StarAnimation'
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
  const [betAmount, setBetAmount] = useState(0)

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
          <div className={styles.crashGambleInfo}>
            <h1>BALANCE: {money}$</h1>
          </div>

          <div className={styles.betMenu}>
          <div className={styles.betMenuContentWrapper}>

        
            <h1>bet input 0.0000000000BTC</h1>
            <div className={styles.placeBet}>
            
              <img src='https://img.icons8.com/?size=512&id=13013&format=png' className={styles.moneyImg}></img>
              <input type='number' min={0} placeholder='0.00' className={styles.betAmount} value={betAmount} onChange={(e) => setBetAmount(e.target.value)}></input>
            
            </div>

            <div className={styles.cashout}>
              <h1>Cashout at</h1>
              <input placeholder='1.01'></input>
            </div>
            <div className={styles.betMultiplier}>
            <div className={styles.multipliersWrapper}>
                <h1>½ </h1>
                <h1>2x </h1>
                <h1 className={styles.last}>max</h1>
            </div>
                
              </div>

            <button className={styles.placeBetBtn} onClick={startCrash}>Bet (Next Round)</button>
            <div className={styles.betHitsory}>
              <h2>progkitten <span className={styles.multiplierSpan}>1.54x</span> <span className={styles.win}>BGN$1,923.3</span></h2>
              {[...Array(17).keys()].map(() => <>
              <h1><span className={styles.error}>ERROR!</span> user not found</h1>
              </>)}
            </div>
          </div>
          </div>
          <h2 className={styles.betMultiplierNum}>{multiplier.toFixed(2)}x</h2>
          <div className={styles.rocketGameWrapper}>
              <div className={styles.rocketWrapper}>
              <h1>CRASH GAMBLE</h1>
              
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
