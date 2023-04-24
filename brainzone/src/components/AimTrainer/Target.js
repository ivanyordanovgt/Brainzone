import React from 'react'
import './target.css'
export const Target = ({onClick}) => {

  const targetParts = [
    {name: 'white', targetClass: "white-outer", points: 4},
    {name: 'black', targetClass: "black-outer", points: 6},
    {name: 'blue', targetClass: "blue-outer", points: 7},
    {name: 'red', targetClass: "red-outer", points: 9},
    {name: 'gold', targetClass: "gold-outer", points: 13},
  ]
  
  return (
    <div>
        <div class="target" >
        {targetParts.map((el) => {
          console.log('pok')
          return <div onClick={() => onClick(el.name, el.points)} className={el.targetClass} name={el.name}></div>
        })}
       
</div>
    </div>
  )
}
