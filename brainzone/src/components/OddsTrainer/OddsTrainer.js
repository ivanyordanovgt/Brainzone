import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import styles from './oddsTrainer.module.css';
import RocketAnimation from './components/RocketAnimation/RocketAnimation';
import ChooseCardAnimation from './components/ChooseCardAnimation/ChooseCardAnimation';
export const OddsTrainer = () => {

    
    return (
        <>
        <div className={styles.rocketGameWrapper}>
            <RocketAnimation widthPercentage={0.32}/>
            <div className={styles.rocketGameInfo}>
                <h1> trybetting on the outcome of a virtual "crash," </h1>
                <h1>where the multiplier increases until it suddenly crashes and all bets are lost</h1>
                <h2>MID-RISK</h2>
            </div>
        </div>

        <ChooseCardAnimation>
            
        </ChooseCardAnimation>
        
        </>
    )
}
