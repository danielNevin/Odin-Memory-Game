import React, { useState, useEffect } from "react";
import _ from 'lodash';

function RandomiseCards(props) {
  const [cards, setCards] = useState([
    { key: 1, content: "Card 1", clickState: false },
    { key: 2, content: "Card 2", clickState: false },
    { key: 3, content: "Card 3", clickState: false },
    { key: 4, content: "Card 4", clickState: false },
    { key: 5, content: "Card 5", clickState: false },
    { key: 6, content: "Card 6", clickState: false },
    { key: 7, content: "Card 7", clickState: false },
    { key: 8, content: "Card 8", clickState: false },
    { key: 9, content: "Card 9", clickState: false },
    { key: 10, content: "Card 10", clickState: false },
    { key: 11, content: "Card 11", clickState: false },
    { key: 12, content: "Card 12", clickState: false }
  ]);

  useEffect(() => {
    setCards(_.shuffle(cards));
  })

  const clickCard = (target) => {
    
  }

  return (
    <div>
      {cards.map(card => (
        <div key={card.key} onClick={clickCard(card.key)}>{card.content}</div>
      ))}
    </div>
  )
}

export default RandomiseCards;