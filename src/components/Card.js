import React, { useState } from "react";

const Card = () => {
  // State to store the list of saved cards
  const [savedCards, setSavedCards] = useState([]);

  // Handler to save card content to the list
  const saveCard = (content) => {
    setSavedCards([...savedCards, content]);
  };

  const cardData = [
    "Any dog under fifty pounds is a cat and cats are useless.",
    "Friends: one to three is sufficient.",
    "History began July 4th, 1776. Anything before that was a mistake.",
    "Standard birth control methods are usually ineffective against a Swanson.",
    "I wanna punch you in the face so bad right now.",
    "When I eat, it is the food that is scared.",
  ];

  return (
    <>
      <div className="cardContainer">
        {/* Displaying cards in rows and columns in the form of 2*3 */}
        <div className="row1">
          {cardData.slice(0, 3).map((content, index) => (
            <div className="col" key={index}>
              <div className="card">
                <p className="card-content">{content}</p>
                <button
                  onClick={() => saveCard(content)}
                  className="save-button"
                >
                  Save to List
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="row2">
          {cardData.slice(3, 6).map((content, index) => (
            <div className="col" key={index}>
              <div className="card">
                <p className="card-content">{content}</p>
                <button
                  onClick={() => saveCard(content)}
                  className="save-button"
                >
                  Save to List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Displaying the saved list of cards */}
      <div className="savedCardsContainer">
        <h2>Saved Cards</h2>
        {savedCards.map((content, index) => (
          <div className="saved-card" key={index}>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
