import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
        Welcome !
        <Link to="/sequince">Sequince memory</Link>
        <Link to="/reaction-time">Reaction time</Link>
    </div>
  )
}
