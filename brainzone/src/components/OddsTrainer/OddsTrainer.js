import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { CardWar } from './components/CardWar/CardWar';
import { ChooseCard } from './components/ChooseCard/ChooseCard';
import { CrashGamble } from './components/CrashGamble/CrashGamble';
import styles from './oddsTrainer.module.css';
import cardImg from '../../images/cardImages/Jokers/Joker_2.png';
import rocket from '../../images/crashGame/rocket.png'
export const OddsTrainer = () => {


    return (
        <>
        <div className={styles.rocketWrapper}>
          <div className={styles.rocketDiv}>
                    {[...Array(20).keys()].map(() => {
                        let x = Math.floor(Math.random() * window.innerWidth*0.27)
                        let h = Math.random() * 90 + 10;
                        let duration = Math.random() * 1 + 0.2;
                        return <i style={{
                            left: `${x}px`,
                            width: `1px`,
                            height: `${h}px`,
                            animationDuration: `${duration}s`
                        }}></i>
                    })}
                    <div className={styles.rocket}>
                        <img src={rocket}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
