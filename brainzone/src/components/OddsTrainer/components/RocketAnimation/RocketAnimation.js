import styles from './rocketAnimation.module.css';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import rocket from '../../../../images/crashGame/rocket.png'
import { Link } from 'react-router-dom';
const RocketAnimation = ({widthPercentage, rocketDivMarginLeft, rocketStyle, text, textStyles}) => {
    
    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
            setWidth(ref.current.offsetWidth);
            setHeight(ref.current.offsetHeight);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
    
        return () => window.removeEventListener('resize', updateSize);

    }, []);
  return (
    <Link to={"crash-gamble"}>
            <div className={styles.rocketWrapper}>
            <h1>CRASH GAMBLE</h1>
          <div ref={ref} className={styles.rocketDiv} style={{marginLeft: rocketDivMarginLeft}}>
                    <h1>WIDTH: {width}</h1>
                    {[...Array(40).keys()].map(() => {
                        let x = Math.floor(Math.random() * width)
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
                    <h2 style={textStyles}>{text}</h2>
                    <div className={rocketStyle ? rocketStyle: styles.rocket}>
                        <img src={rocket} ></img>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default RocketAnimation