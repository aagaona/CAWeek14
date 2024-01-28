import React, { useState } from 'react';
import Starrating from './Starrating';

function Reviewform({ reviews, setReviews }) {
  const [newReview, setNewReview] = useState({
    id: reviews.length + 1,
    title: '',
    text: '',
    rating: 0,
  });

  const handleTitleChange = (event) => {
    setNewReview((prevReview) => ({ ...prevReview, title: event.target.value }));
  };

  const handleTextChange = (event) => {
    setNewReview((prevReview) => ({ ...prevReview, text: event.target.value }));
  };

  const handleRatingChange = (selectedRating) => {
    setNewReview((prevReview) => ({ ...prevReview, rating: selectedRating }));
  };

  const addReview = () => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({
      id: reviews.length + 1,
      title: '',
      text: '',
      rating: 0,
    });
  };

  return (
    <div>
      <div className='review-form-header'>
        <h4>Leave a review!</h4>
      </div>
      <div className='review-form-body'>
        <form>
          <Starrating initialRating={newReview.rating} onRatingChange={handleRatingChange} />
          <textarea
            rows='1'
            cols='30'
            placeholder='Review Title'
            value={newReview.title}
            onChange={handleTitleChange}
            className='text-title'
          />
          <label>Your Review:</label>
          <textarea
            rows='4'
            cols='30'
            placeholder='Write your review here...'
            value={newReview.text}
            onChange={handleTextChange}
          />
          <br />
          <button className='btn btn-dark' type='button' onClick={addReview}>
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reviewform;
