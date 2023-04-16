import React, { memo, useState } from 'react'
import styles from './SequinceMemory.module.css'
export const SequinceMemory = () => {

  const [level, setLevel] = useState(1)
  const [memoriseOrder, setMemoriseOrder] = useState([])
  const [currentHighlight, setCurrentHighlight] = useState(null);
  const levelGenerator = (memoriseBoxesCount, rows, cols) => {
    return {'memoriseBoxesCount': memoriseBoxesCount, 
            'rows': rows,
            'cols': cols,
          }
  }

  const hightlightMemoriseBoxes = (numbers) => {
    let timeOut = 500;
    const timeOutBonus = 800;
    for (let boxIndex of numbers) {
      setTimeout(() => setCurrentHighlight(boxIndex), timeOut) 
      timeOut += timeOutBonus
    }
  }

  const createMemoriseOrder = () => {
    const levelData = levels[level]
    const memoriseBoxesCount = levelData.memoriseBoxesCount
    const numbers = [];
    for (let i=0; i<memoriseBoxesCount; i++) {
      const number = Math.floor(Math.random() * levelData.rows*levelData.cols)
      if (numbers.includes(number)) {
        i -= 1
        continue;
      }
      numbers.push(number)
      console.log(numbers)
    }

    setMemoriseOrder(numbers);
    hightlightMemoriseBoxes(numbers);
  }

  function onBoxClick(boxIndex) {
    console.log(boxIndex)
  }

  const levels = {
    1: levelGenerator(4, 3, 3),
    2: levelGenerator(5, 3, 3),
    3: levelGenerator(6, 3, 3),
    4: levelGenerator(4, 4, 3),
    5: levelGenerator(6, 4, 4),
    6: levelGenerator(8, 4, 4),
    7: levelGenerator(5, 5, 4),
    8: levelGenerator(8, 5, 5),
  }

  return (
    
    <div>

      <div className={styles.sequinceBox}>
          {[...Array(levels[level].rows)].map((x, rowIndex) => {
          
          return <div className={styles.row}>
            {[...Array(levels[level].cols)].map((x, colIndex) => {
              return <div className={styles.card} onClick={() => onBoxClick(rowIndex+rowIndex+colIndex+rowIndex)}>
                {currentHighlight==rowIndex+rowIndex+colIndex+rowIndex ? <div className={styles.hightlight}></div>: ''}
              </div>
            }) }
          </div>})}
      </div>

      <button onClick={createMemoriseOrder}>Start</button>
    </div>
   
  )
}
