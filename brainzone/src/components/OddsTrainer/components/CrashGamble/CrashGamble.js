import React from 'react'
import RocketAnimation from '../RocketAnimation/RocketAnimation'
import styles from './crashGamble.module.css'
import rocket from '../../../../images/crashGame/rocket.png'

export const CrashGamble = () => {
  return (
    <>
        <div className={styles.rocketGameWrapper}>
            <div className={styles.rocketWrapper}>
            <h1>CRASH GAMBLE</h1>
          <div className={styles.rocketDiv}>
                    {[...Array(40).keys()].map(() => {
                        let x = Math.floor(Math.random() * window.innerWidth*0.7)
                        let h = Math.random() * 20;
                        let duration = Math.random() * 1 + 3;
                        return <i style={{
                            left: `${x}px`,
                            width: `1px`,
                            top: '1px',
                            height: `${h}px`,
                            animationDuration: `${duration}s`
                        }}></i>
                    })}
                    <h2>x2.01</h2>
                    <div className={styles.rocket} style={{marginTop: '60vh', animationDuration: '1s'}}>
                        <img src={rocket}></img>
                    </div>
              </div>
            </div>
           
        </div>

        <div className={styles.betMenu}>
          <label>bet input</label>
          <div style={styles.placeBet}>
            <input></input>
            <div className={styles.betMultiplier}>

            </div>
          </div>

          <div className={styles.cashout}>
            <label>Cashout at</label>
            <input></input>
          </div>

          <div className={styles.betProfit}></div>
          <div className={styles.betHitsory}>
            {[...Array(5).keys()].map(() => <>
            <h1>test</h1>
            </>)}
          </div>
        </div>
    </>
  )
}
