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
export const OddsTrainer = () => {

    const [cards, setCards] = useState([randomCard(), randomCard(), randomCard()])
    useEffect(
        () => {
            const generateRandomCards = setInterval(
                () => {
                    setCards([randomCard(), randomCard(), randomCard()])
                    console.log('interval!')
                }, 2000)
            return () => clearInterval(generateRandomCards)
        }, [])
    
    return (
        <>
        
        <div className={styles.rocketGameWrapper}>
        
        <RocketAnimation/>
            <div className={styles.rocketGameInfo}>
            <h1> trybetting on the outcome of a virtual "crash," </h1>
            <h1>where the multiplier increases until it suddenly crashes and all bets are lost</h1>
            <h2>MID-RISK</h2>
        </div>
        </div>

        <div className={styles.cardChoice}>
            <Link to="choose-card">
                {[...Array(3).keys()].map(
                    (num, i) => <img src={require(`../../images/cardImages/${cards[i]}`)}></img>
                )}
            </Link>
            <h1>Try to choose the right card and win lots of money!</h1>
            <h1>This game is perfect demonstration of how luck doens't exit and on the long run you will lose everything!</h1>
            <h2>HIGHT-RISK</h2>
        </div>
        
        </>
    )
}
