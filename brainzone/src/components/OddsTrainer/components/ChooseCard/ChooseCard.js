import React, { useState } from 'react'
import styles from './ChooseCard.module.css'
import diamondImg from '../../../../images/cardImages/Diamonds/3.png'
import ClubsImg from '../../../../images/cardImages/Clubs/J.png'
import jokerImg from '../../../../images/cardImages/Jokers/Joker_1.png'
import { OddsBox } from './OddsBox'
export const ChooseCard = () => {
  const cardTypes = {'red': ['Diamonds', 'Hearts'], 'black': ['Clubs', 'Spades']};
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('');
  function randomInt(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function generateCards(cardsCount) {
    const cardsStates = Array(cardsCount).fill('lose');
    const cardsObjList = [];
    const winningNumber = randomInt(0, cardsCount-1)
    cardsStates[winningNumber] = 'win'
    let color = 'black';
    for (let cardState of cardsStates) {
      color = color=='red' ? 'black': 'red';
      let card = randomCard(color);
      cardsObjList.push({'url': card, 'state': cardState});
    }

    setCards(cardsObjList)
    return cardsObjList
  }

  function randomCard(color) {
    const cardType = cardTypes[color][randomInt(0, 1)];
    const cardNumber = randomInt(2, 10);
    return `${cardType}/${cardNumber}.png`
  }

  function onCardClick(ev) {
    console.log(ev.target.id)
    if (ev.target.id == 'win') {
      setMessage('You won!')
    } else {
      setMessage("WRONG, GIVE ME UR MONEY ")
    }
  }

  return (
    <div className={styles.chooseCardMainDiv}>
      <h1>{message}</h1>
      <div className={styles.cards}>
        {!cards.length ? <div>
          <h1>Welcome</h1>
          <h1>Choose odds</h1>
          <div className={styles.oddsChoice}>
            <OddsBox cardUrl={diamondImg} text={'50/50'}/> 
            <OddsBox cardUrl={ClubsImg} text={'30/70'}/> 
            <OddsBox cardUrl={jokerImg} text={'20/80'}/> 
          </div>
           
        </div>: ''}
        {cards.map((card) => {
            return <img 
            onClick={onCardClick}
            src={require(`../../../../images/cardImages/${card.url}`)}
            id={card.state}
            ></img>
        })}
      <button onClick={() => generateCards(3)}>Refresh</button>
      </div>
      
    </div>
  )
}
