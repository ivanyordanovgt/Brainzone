import React, { useContext, useState } from 'react'
import styles from './ChooseCard.module.css'
import diamondImg from '../../../../images/cardImages/Diamonds/3.png'
import clubsImg from '../../../../images/cardImages/Clubs/11.png'
import jokerImg from '../../../../images/cardImages/Jokers/Joker_1.png'
import { OddsBox } from './OddsBox'
import { MoneyContext } from '../../contexts/MoneyContext'
import { randomInt } from '../../../../utils/randomNumber'
import { randomCard } from '../../../../utils/cards'
export const ChooseCard = () => {
  const {money, setMoney} = useContext(MoneyContext)
  const [currentWin, setCurrentWin] = useState(0);
  const [bet, setBet] = useState(0);
  const [showUpgrades, setShowUpgrades] = useState(false);
  const [oddsChoices, setOddsChoices] = useState([
    {imgUrl: clubsImg, text:'50/50', cards: 2}, 
    {imgUrl: diamondImg, text:'70/30', cards: 3}, 
    {imgUrl: jokerImg, text: '20/80', cards: 4}])
  const [cardsAmount, setCardsAmount] = useState(0)
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('');


  function onBetChange(e) {
    const num = Number(e.target.value);
    if (num < money) {
      setBet(num)
    }

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

 

  function onCardClick(ev) {
    console.log(ev.target.id)
    if (ev.target.id == 'win') {
      setMessage('WIN')
      setMoney(state => Math.round(state + bet*cardsAmount/1.5))
      setCurrentWin(state => bet*cardsAmount)
    } else {
      setMessage("LOSE")
      if (money-bet<0) {alert('You lost all your money! We gift you 1000$ to keep playing <3'); setMoney(1000)}
      else {
        setCurrentWin(0)
        setMoney(state => state-bet)
      }
      
      setCurrentWin(0)
    }

    generateCards(cardsAmount);
  }

  function onOddChoiceClick(amount) {
    generateCards(amount)
    setCardsAmount(amount)
  }

  return (
    <div className={styles.chooseCardMainDiv}>
      {cards.length>0 ? <button className={styles.goBackBtn} onClick={() => setCards([])}>{`<-`}</button>: ''}
      <div className={styles.winInfo}>
        <div className={styles.betInput}>
          <label>Bet amount</label> 
          <input value={bet} onChange={onBetChange}></input>
        </div>
        <h1>Money: {money}</h1>
        <h1>LAST WIN: {currentWin}</h1>
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
          <div className={currentWin>0 ? styles.winMessage: styles.loseMessage}>
            <h1 >{message}</h1>
          </div>

            {cards.map((card) => {
            return <div className={styles.item}><img 
            onClick={onCardClick}
            src={require(`../../../../images/cardImages/${card.url}`)}
            id={card.state}
            ></img></div>}
            )}
            

        </div>
          <button className={styles.cashoutBtn}><span>$$$</span> Upgrades <span>$$$</span></button>
          
        </div>: ''}

      </div>
      
    </div>
  )
}
