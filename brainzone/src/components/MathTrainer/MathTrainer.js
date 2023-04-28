import React, { useState } from 'react'
import { randomInt } from '../../utils/randomNumber'
import { mathOperators } from '../../utils/math'
import styles from './mathTrainer.module.css'
export const MathTrainer = () => {

    const [answer, setAnswer] = useState();
    const [message, setMessage] = useState('Click to start');
    const [problemType, setProblemType] = useState('+');
    const [userAnswer, setUserAnswer] = useState();
    function generateProblem(numLength, type) {
        let num1 = randomInt(Number('1'+ '0'.repeat(numLength-1)), Number('1' + '0'.repeat(numLength)))
        let num2 = randomInt(Number('1'+ '0'.repeat(numLength-1)), Number('1' + '0'.repeat(numLength)))
        setAnswer(mathOperators[problemType](num1, num2))
        setMessage(`${num1} ${problemType} ${num2}`)
        return [num1, type, num2]
    }

    function checkAnswer() {
        setMessage(answer===userAnswer ? 'Correct!': 'Incorrect!')
    }

  return (
    <div>
        <div className={styles.mathDiv}>
            {message}
            {Object.keys(mathOperators).map((sign) => {
                return <button onClick={() => setProblemType(sign)}>{sign}</button>
            })}
            <button onClick={() => generateProblem(1)}>click</button>
        
                
        </div>
        <div className={styles.mathDiv}>
            <input type='number' value={userAnswer} onChange={(e) => setUserAnswer(Number(e.target.value))}></input>
            <button onClick={checkAnswer}>Check answer</button>
        </div>
    </div>
  )
}
