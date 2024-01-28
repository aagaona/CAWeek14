import React, { useState } from 'react'
import Reviews from './Reviews'
import Reviewform from './Reviewform'

function Reviewlist() {
  const [reviews,setReviews] = useState([
    {
        id: 1,
        title: 'Best Movie!',
        text: 'The captivating storyline, coupled with stellar performances from the cast, makes this movie an engaging and emotional rollercoaster. The seamless blend of breathtaking visuals and a compelling narrative ensures a memorable cinematic experience for all audiences.',
        rating: 5
    },
    {
        id: 2,
        title: 'Favorite Movie Ever',
        text: "With its gripping plot twists and impeccable cinematography, this film delivers a riveting experience that keeps viewers on the edge of their seats. The talented ensemble cast's performances add depth to the characters, making it a must-watch for both cinephiles and casual moviegoers alike.",
        rating: 4
    },
  ]);
  
  return (
    <div>
      <div>
        {reviews.map(review => <Reviews key={review.id} review={review}/>)}
      </div>
      <div>
        <Reviewform reviews={reviews} setReviews={setReviews}/>
      </div>
    </div>
  )
}

export default Reviewlist