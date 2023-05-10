import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homePage.module.css'
export const HomePage = () => {
  return (
    <div className={styles.games}>

        <div className={styles.gamesRow}>
          <Link to="/sequince">
          <div className={`${styles.sequinceMemory} ${styles.gamesLayer1}`}>
            <div className={styles.squares}>
            <div className={styles.squareLayer1}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div className={styles.squareLayer2}>
                <div className={styles.square}></div>
                <div className={styles.filledSquare}></div>
              </div>
            
            </div>
            <h2>Sequince memory</h2>

          </div>
          </Link>

          <h1>Welcome</h1>

          <Link to="/reaction-time">
          <div className={`${styles.reactionTime}  ${styles.gamesLayer1}`}>
            <div>
            <img src='https://cdn-icons-png.flaticon.com/512/2675/2675949.png'></img>

            </div>
            <h2>Reaction time</h2>

            </div>
            </Link>
        </div>

        <div className={styles.gamesRow}>
        <Link to="/aim-trainer">

          <div className={`${styles.reactionTime} `}>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/512/3265/3265254.png'></img>
            </div>
            <h2>Aim Trainer</h2>
          </div>
        </Link>
        <Link to="/odds-trainer">
        <div className={`${styles.luckTrainer}`}>
          <div>
            <img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3261195/casino-icon-md.png'></img>
          </div>
          <h2>Luck Trainer</h2>
          <h2><span>MOST POPULAR</span></h2>
        </div>
        </Link>
        <Link to="/math-trainer">
        <div className={`${styles.mathTrainer}`}>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZX36HQohB7LwMEibJKHMN0ZIZq2UJ4qNllg&usqp=CAU'></img>
          </div>
          <h2>Math Trainer</h2>

        </div>
        </Link>
        </div>

        
        
    </div>
  )
}
