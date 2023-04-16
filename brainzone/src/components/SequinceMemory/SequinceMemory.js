import React, { useState } from 'react'
import styles from './SequinceMemory.module.css'
export const SequinceMemory = () => {

  const [level, setLevel] = useState(1)

  const levelGenerator = (memoriseBoxesCount, rows, cols) => {
    return {'memoriseBoxesCount': memoriseBoxesCount, 
            'rows': rows,
            'cols': cols,
          }
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
        {[...Array(levels[level].rows)].map((x, i) => {
        return <div className={styles.row}>
          {[...Array(levels[level].cols)].map((x, i) => {
            return <div className={styles.card}></div>
          }) }
        </div>})}
    </div>
    </div>
   
  )
}
