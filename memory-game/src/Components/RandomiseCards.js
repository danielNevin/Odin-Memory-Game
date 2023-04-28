import React, { useState, useEffect } from "react";
import _ from 'lodash';

function RandomiseCards(props) {
  const [cards, setCards] = useState([
    { key: 1, content: "Card 1", clickState: false, colour: 'red' },
    { key: 2, content: "Card 2", clickState: false, colour: 'orange' },
    { key: 3, content: "Card 3", clickState: false, colour: 'yellow' },
    { key: 4, content: "Card 4", clickState: false, colour: 'lime' },
    { key: 5, content: "Card 5", clickState: false, colour: 'green' },
    { key: 6, content: "Card 6", clickState: false, colour: 'teal' },
    { key: 7, content: "Card 7", clickState: false, colour: 'blue' },
    { key: 8, content: "Card 8", clickState: false, colour: 'indigo' },
    { key: 9, content: "Card 9", clickState: false, colour: 'purple' },
    { key: 10, content: "Card 10", clickState: false, colour: 'pink' },
    { key: 11, content: "Card 11", clickState: false, colour: 'fuchsia' },
    { key: 12, content: "Card 12", clickState: false, colour: 'maroon' }
  ]);

  const [showOverlay, setShowOverlay] = useState(false);

  const clickCard = (target) => {
    const clickedCard = cards.find(card => card.key === target);
    if (!clickedCard.clickState) {
      const newScores = {
        currentScore: props.scores.currentScore += 1,
        topScore: props.scores.currentScore > props.scores.topScore ? props.scores.currentScore : props.scores.topScore
      }
      props.updateScores(newScores);
      clickedCard.clickState = true;
      setCards(cards => _.shuffle(cards));
      if (newScores.currentScore === 12) {
        setShowOverlay(true);
      }
    } else  {
      props.updateScores({ currentScore: 0, topScore: props.scores.topScore });
      setCards(cards => {
        cards.forEach(card => {
          card.clickState = false;
        });
        return _.shuffle(cards);
      });
    }
  }

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-3 gap-12 m-12 mt-4">
        {cards.map(card => (
          <div style={{ backgroundColor: card.colour }} className="cursor-pointer h-48 rounded-2xl shadow-3xl hover:animate-slow-pulse hover:scale-105 transition-all" key={card.key} onClick={() => clickCard(card.key)}></div>
        ))}
      </div>
      {showOverlay && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-3xl rounded-2xl text-lg">
          Congratulations! You've Won!
        </div>
      )}
    </div>
    
  )
}

export default RandomiseCards;