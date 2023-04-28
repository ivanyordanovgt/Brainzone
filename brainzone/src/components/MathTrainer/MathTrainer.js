import React from 'react'
import { randomInt } from '../../utils/randomNumber'

export const MathTrainer = () => {

    function generateProblem(numLength, type) {
        let num1 = randomInt(Number('1'+ '0'.repeat(numLength-1)), Number('1' + '0'.repeat(numLength)))
        let num2 = randomInt(Number('1'+ '0'.repeat(numLength-1)), Number('1' + '0'.repeat(numLength)))
    }

  return (
    <div>MathTrainer</div>
  )
}
