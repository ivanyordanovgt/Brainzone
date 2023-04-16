import React, { useState } from 'react'
import styles from './SequinceMemory.module.css'
export const SequinceMemory = () => {

  const [level, setLevel] = useState(1)

  const levelGenerator = (memoriseBoxesCount, boxes) => {
    return {'memoriseBoxesCount': memoriseBoxesCount, 
            'boxes': boxes}
  }

  const levels = {
    1: levelGenerator(4, 9),
    2: levelGenerator(5, 9),
    3: levelGenerator(6, 9),
    4: levelGenerator(4, 12),
    5: levelGenerator(6, 12),
    6: levelGenerator(8, 12),
    7: levelGenerator(5, 15),
    8: levelGenerator(8, 15),
  }

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
    // <div className={styles.sequinceBox}>
    //     {[...Array(levels[level].boxes)].map((x, i) =>
    //       <h1>box</h1>)}
    // </div>
  )
}
