import styles from './rocketAnimation.module.css';
import React from 'react'
import rocket from '../../../../images/crashGame/rocket.png'
import { Link } from 'react-router-dom';
const RocketAnimation = () => {
  return (
    <Link to={"crash-gamble"}>
            <div className={styles.rocketWrapper}>
            <h1>CRASH GAMBLE</h1>
          <div className={styles.rocketDiv}>
                    {[...Array(40).keys()].map(() => {
                        let x = Math.floor(Math.random() * window.innerWidth*0.32)
                        let h = Math.random() * 20;
                        let duration = Math.random() * 1 + 0.2;
                        return <i style={{
                            left: `${x}px`,
                            width: `1px`,
                            top: '1px',
                            height: `${h}px`,
                            animationDuration: `${duration}s`
                        }}></i>
                    })}
                    <div className={styles.rocket}>
                        <img src={rocket}></img>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default RocketAnimation