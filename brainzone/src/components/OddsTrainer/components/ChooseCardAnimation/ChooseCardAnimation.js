import React, { useState } from 'react'
import styles from './chooseCardAnimation.module.css'
import { Link } from 'react-router-dom';
import { randomCard } from '../../../../utils/cards';
import { useEffect } from 'react';
const ChooseCardAnimation = () => {
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
    <div className={styles.cardChoice}>
            <Link to="choose-card">
                {[...Array(3).keys()].map(
                    (num, i) => <img src={require(`../../../../images/cardImages/${cards[i]}`)}></img>
                )}
            </Link>
            <h1>Try to choose the right card and win lots of money!</h1>
            <h1>This game is perfect demonstration of how luck doens't exit and on the long run you will lose everything!</h1>
            <h2>HIGHT-RISK</h2>
        </div>
  )
}

export default ChooseCardAnimation