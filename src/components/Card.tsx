import React from 'react'
import '../styles/Card.css'

//för att componenten ska kunna ta emot children som props
type CardProps = {
    children: React.ReactNode;
    width: string;
    height: string;
    backgroundColor: string;
}

function Card(props: CardProps) {
  return (
    <div>
      <div className='card' style={{width:props.width, height:props.height, backgroundColor:props.backgroundColor}}>
        {props.children}
      </div>
    </div>
  )
}


export default Card
