import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { CardWar } from './components/CardWar/CardWar';
import { ChooseCard } from './components/ChooseCard/ChooseCard';
import { CrashGamble } from './components/CrashGamble/CrashGamble';
import styles from './oddsTrainer.module.css';
import cardImg from '../../images/cardImages/Jokers/Joker_2.png';
import rocket from '../../images/crashGame/rocket.png'
import { randomCard } from '../../utils/cards';
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
