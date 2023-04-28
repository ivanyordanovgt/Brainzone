import React, { useContext, useState } from 'react'
import styles from './ChooseCard.module.css'
import diamondImg from '../../../../images/cardImages/Diamonds/3.png'
import clubsImg from '../../../../images/cardImages/Clubs/J.png'
import jokerImg from '../../../../images/cardImages/Jokers/Joker_1.png'
import { OddsBox } from './OddsBox'
import { MoneyContext } from '../../contexts/MoneyContext'
export const ChooseCard = () => {
  const {money, setMoney} = useContext(MoneyContext)
  const [currentWin, setCurrentWin] = useState(0)
  const [oddsChoices, setOddsChoices] = useState([
    {imgUrl: clubsImg, text:'50/50', cards: 2}, 
    {imgUrl: diamondImg, text:'70/30', cards: 3}, 
    {imgUrl: jokerImg, text: '20/80', cards: 4}])
  const [cardsAmount, setCardsAmount] = useState(0)
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('');
  const cardTypes = {'red': ['Diamonds', 'Hearts'], 'black': ['Clubs', 'Spades']};


  
  function randomInt(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function generateCards(cardsAmount) {
    const cardsStates = Array(cardsAmount).fill('lose');
    const cardsObjList = [];
    const winningNumber = randomInt(0, cardsAmount-1)
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
      setMessage('WIN')
    } else {
      setMessage("LOSE")
    }

    generateCards(cardsAmount);
  }

  function onOddChoiceClick(amount) {
    generateCards(amount)
    setCardsAmount(amount)
  }

  return (
    <div className={styles.chooseCardMainDiv}>
      <div className={styles.winInfo}> 
              <h1>Money: {money}</h1>
              <h1>Cashout: {currentWin}</h1>
            </div>

      <div className={styles.cards}>

        {cards.length <= 0 ? <div>
          <h1>Welcome</h1>
          <h1>Choose odds</h1>
          <div className={styles.oddsChoice}>
            {oddsChoices.map((oddInfo) => {
            return <OddsBox onClick={() => onOddChoiceClick(oddInfo.cards)} cardUrl={oddInfo.imgUrl} text={oddInfo.text}/> 
            })}
          </div>
           
        </div>: ''}
        {cards.length > 0 ? <div>
          <div className={styles.guessCardDiv}>
          <div className={styles.winMessage}>
            <h1>{message}</h1>
          </div>

            {cards.map((card) => {
            return <div className={styles.item}><img 
            onClick={onCardClick}
            src={require(`../../../../images/cardImages/${card.url}`)}
            id={card.state}
            ></img></div>}
            )}

        </div>
          <button className={styles.cashoutBtn}>Cashout</button>
        </div>: ''}

      </div>
      
    </div>
  )
}
