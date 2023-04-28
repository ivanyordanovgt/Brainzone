import React from 'react'
import styles from './ChooseCard.module.css'
export const OddsBox = ({cardUrl, text}) => {
  return (
    <div className={styles.oddsBox}>
        <img src={cardUrl}></img>
        <h1>{text}</h1>  
    </div> 
  )
}
