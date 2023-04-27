import React, { useState } from 'react'
import styles from './ChooseCard.module.css'
import image from '../../../../images/cardImages/Diamonds/3.png'
export const ChooseCard = () => {
  const cardTypes = {'red': ['Diamonds', 'Hearts'], 'black': ['Clubs', 'Spades']};
  const [cards, setCards] = useState([{'url': randomCard('red'), 'state': 'no'}, {'url': randomCard('black'), 'state': 'no'}]);

  function randomInt(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function generateCardOdds(cardsCount) {
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

  return (
    <div>
      <div className={styles.cards}>
        {cards.map((card) => {
            return <img 
            src={require(`../../../../images/cardImages/${card.url}`)}
            win={card.state=='win' ? true: false}
            ></img>
        })}
      <button onClick={() => generateCardOdds (2)}>Refresh</button>
      </div>
      
    </div>
  )
}
