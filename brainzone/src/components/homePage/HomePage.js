import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homePage.module.css'
export const HomePage = () => {
  return (
    <div>
        Welcome !
        <div className={styles.sequinceMemory}>
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

        <div>
          <Link to="/reaction-time">Reaction time</Link>
        </div>
        <div>
          <Link to="/aim-trainer">Aim Trainer</Link>
        </div>
        <div>
          <Link to="/odds-trainer">Luck Trainer</Link>
        </div>
        <div>
          <Link to="/math-trainer">Math Trainer</Link>

        </div>
    </div>
  )
}
