import React, { useContext, useState } from 'react'
import RocketAnimation from '../RocketAnimation/RocketAnimation'
import styles from './crashGamble.module.css'
import rocket from '../../../../images/crashGame/rocket.png'
import { MoneyContext } from '../../contexts/MoneyContext'
import StarAnimation from './StarAnimation'
const BetMenu = ({money, startCrash}) => {
  const [betAmount, setBetAmount] = useState(0)

  return (
    <>
        <div className={styles.crashGambleInfo}>
        <h1>BALANCE: {money.toFixed(0)}$</h1>
    </div>

    <div className={styles.betMenu}>
    <div className={styles.betMenuContentWrapper}>


        <h1>bet input 0.0000000000BTC</h1>
        <div className={styles.placeBet}>
        
        <img src='https://img.icons8.com/?size=512&id=13013&format=png' className={styles.moneyImg}></img>
        <input type='number' min={10} placeholder='0.00' className={styles.betAmount} value={betAmount} onChange={(e) => setBetAmount(e.target.value)}></input>
        
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

        <button className={styles.placeBetBtn} onClick={() => startCrash(betAmount)}>Bet (Next Round)</button>
        <div className={styles.betHitsory}>
        <h2>progkitten <span className={styles.multiplierSpan}>1.54x</span> <span className={styles.win}>BGN$1,923.3</span></h2>
        {[...Array(17).keys()].map(() => <>
        <h1><span className={styles.error}>ERROR!</span> user not found</h1>
        </>)}
        </div>
    </div>
    </div>
    </>
  )
}

export default BetMenu