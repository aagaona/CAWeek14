import React, { useState } from 'react';


const Starrating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= rating ? 'selected' : ''}`}
          onClick={() => handleStarClick(value)}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};

export default Starrating;
