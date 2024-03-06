import React from 'react'
import '../styles/Card.css'

//för att componenten ska kunna ta emot children som props
type CardProps = {
    children: React.ReactNode;
}

function Card(props: CardProps) {


  return (
    <div>
      <div className='card'>
        {props.children}
      </div>
    </div>
  )
}


export default Card
