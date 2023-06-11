import React, { useContext, useState } from 'react'
import RocketAnimation from '../RocketAnimation/RocketAnimation'
import styles from './crashGamble.module.css'
import rocket from '../../../../images/crashGame/rocket.png'
import { MoneyContext } from '../../contexts/MoneyContext'
export const CrashGamble = () => {

  const {money, setMoney} = useContext(MoneyContext);
  const [multiplier, setMultiplier] = useState(1.00);
  const [starHeightMultiplier, setStarHeightMutliplier] = useState(3)

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
              <input type='number' min={0} placeholder='0.00' className={styles.betAmount}></input>
            
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

            <button className={styles.placeBetBtn}>Bet (Next Round)</button>
            <div className={styles.betHitsory}>
              <h2>progkitten <span className={styles.multiplierSpan}>1.54x</span> <span className={styles.win}>BGN$1,923.3</span></h2>
              {[...Array(17).keys()].map(() => <>
              <h1><span className={styles.error}>ERROR!</span> user not found</h1>
              </>)}
            </div>
          </div>
          </div>

          <div className={styles.rocketGameWrapper}>
              <div className={styles.rocketWrapper}>
              <h1>CRASH GAMBLE</h1>
              <h2>{multiplier.toFixed(2)}x</h2>
            <div className={styles.rocketDiv}>
                      {[...Array(40).keys()].map(() => {
                          let x = Math.floor(Math.random() * window.innerWidth*0.73)
                          let h = Math.random() * starHeightMultiplier;
                          let duration = Math.random() * 2 + 1;
                          return <i style={{
                              left: `${x}px`,
                              width: `1px`,
                              top: '1px',
                              height: `${h}px`,
                              animationDuration: `${duration}s`
                          }}></i>
                      })}
                      <div className={styles.rocket} style={{marginTop: '60vh', animationDuration: '1s'}}>
                          <img src={rocket}></img>
                      </div>
                </div>
              </div>
            
          </div>
        </div>


    </>
  )
}
