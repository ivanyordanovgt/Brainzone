import React from 'react'

const StarAnimation = ({starHeightMultiplier, starAnimationDuration}) => {
  return (
    <>
    {[...Array(40).keys()].map(() => {
        let x = Math.floor(Math.random() * window.innerWidth*0.73)
        let h = Math.random() * starHeightMultiplier;
        let duration = Math.random() * 0.9 + starAnimationDuration;
        return <i style={{
            left: `${x}px`,
            width: `1px`,
            top: '1px',
            height: `${h}px`,
            animationDuration: `${duration}s`
        }}></i>
    })}
  </>)
}

export default StarAnimation