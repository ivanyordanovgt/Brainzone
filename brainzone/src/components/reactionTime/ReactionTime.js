import React, { useState } from 'react'
import styles from "./reactionTime.module.css"


export const ReactionTime = () => {
    const [reactionTime, setReactionTime] = useState(null);
    const [reactState, setReactState] = useState(false);
    const [lookForClick, setLookForClick] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [points, setPoints] = useState(0);
    function onReactionDivClick() {
        if (reactState) {
            if (lookForClick) {
                setPoints(p => p+1)
                setReactionTime(new Date()-startTime)
                setReactState(false); setLookForClick(false);
            } else {
                console.log('Click when you see green!');
            };

            return
        };
        setReactState(true)
        setTimeout(() => {
            const date = new Date();
            setStartTime(date)
            setLookForClick(true)
        }, Math.floor(Math.random() * 5001))
        
    }

    return (
        <div>
            {reactionTime ? <div>You reaction in {reactionTime}ms!</div>: ''}
            <div onClick={onReactionDivClick} className={`${styles.reactionTimeDiv} ${ lookForClick ? styles.waitingForClick: 'nopent'}`}>

            </div>
        </div>
    )
}
