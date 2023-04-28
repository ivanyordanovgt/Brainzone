import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
        Welcome !
        <Link to="/sequince">Sequince memory</Link>
        <Link to="/reaction-time">Reaction time</Link>
        <Link to="/aim-trainer">Aim Trainer</Link>
        <Link to="/odds-trainer">Luck Trainer</Link>
        <Link to="/math-trainer">Math Trainer</Link>
    </div>
  )
}
