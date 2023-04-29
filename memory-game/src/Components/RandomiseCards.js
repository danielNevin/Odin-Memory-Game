import React, { useState, useEffect } from "react";
import _ from 'lodash';

function RandomiseCards(props) {  /* Define the component */
  const [cards, setCards] = useState([  /* Declare a state variable for the cards array and a setter function to update it */
    { key: 1, content: "Card 1", clickState: false, colour: 'red' },  /* Each card has a key, content, clickState, and colour property */
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

  const [showOverlay, setShowOverlay] = useState(false);  /* Declare a state variable for whether to show the "Congratulations!" overlay and a setter function to update it */

  const clickCard = (target) => { /* Define the function that handles a card click event */
    const clickedCard = cards.find(card => card.key === target);  /* Find the clicked card in the cards array */
    if (!clickedCard.clickState) {  /* If the card has not been clicked before */
      const newScores = {  /* Declare a new scores object */
        currentScore: props.scores.currentScore += 1,  /* Increment the user's current score */
        topScore: props.scores.currentScore > props.scores.topScore ? props.scores.currentScore : props.scores.topScore  /* Update the user's top score if the current score is higher */
      }
      props.updateScores(newScores);  /* Call the updateScores function with the new scores object to update the parent component's state */
      clickedCard.clickState = true;  /* Set the clickState of the clicked card to true */
      setCards(cards => _.shuffle(cards));  /* Shuffle the order of the cards */
      if (newScores.currentScore === 12) {  /* If the user has clicked on all 12 cards */
        setShowOverlay(true);  /* Set the showOverlay state variable to true to display the overlay message */
      }
    } else  {  /* If the card has already been clicked before */
      props.updateScores({ currentScore: 0, topScore: props.scores.topScore });  /* Reset the user's current score to 0 and update the top score */
      setCards(cards => {  /* Reset the clickState of all cards and shuffle the order of the cards */
        cards.forEach(card => {  /* Map across all cards */
          card.clickState = false;  /* And set their clickState back to the default false */
        });
        return _.shuffle(cards);  /* Shuffle the order of the cards */
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