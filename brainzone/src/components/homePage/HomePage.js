import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homePage.module.css'
export const HomePage = () => {
  return (
    <div>
        Welcome !
        <div className={styles.sequinceMemory}>

        </div>
        <Link to="/sequince">Sequince memory</Link>
        <Link to="/reaction-time">Reaction time</Link>
        <Link to="/aim-trainer">Aim Trainer</Link>
        <Link to="/odds-trainer">Luck Trainer</Link>
        <Link to="/math-trainer">Math Trainer</Link>
    </div>
  )
}
