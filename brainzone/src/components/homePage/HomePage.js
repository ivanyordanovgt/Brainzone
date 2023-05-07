import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homePage.module.css'
export const HomePage = () => {
  return (
    <div className={styles.games}>
        Welcome !


        <div className={styles.gamesRow}>

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
            <Link to="/sequince">Sequince memory</Link>

          </div>

          
          <div className={`${styles.reactionTime}  ${styles.gamesLayer1}`}>
            <div>
            <img src='https://cdn-icons-png.flaticon.com/512/2675/2675949.png'></img>

            </div>
            <Link to="/reaction-time">Reaction time</Link>

          </div>
        </div>

        <div className={styles.gamesRow}>
        <div className={`${styles.reactionTime} `}>
          <div>
            <img src='https://cdn-icons-png.flaticon.com/512/3265/3265254.png'></img>
          </div>
          <Link to="/aim-trainer">Aim Trainer</Link>
        </div>
        <div className={`${styles.luckTrainer}`}>
          <div>
            <img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3261195/casino-icon-md.png'></img>
          </div>
          <Link to="/odds-trainer">Luck Trainer</Link>
        </div>
        <div className={`${styles.mathTrainer}`}>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZX36HQohB7LwMEibJKHMN0ZIZq2UJ4qNllg&usqp=CAU'></img>
          </div>
          <Link to="/math-trainer">Math Trainer</Link>

        </div>
        </div>

        
        
    </div>
  )
}
