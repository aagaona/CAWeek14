import React, { useState } from 'react'

function Reviews({review}) {
    return (
    <div>
        <div className='review-header'>
            <span>
              <h4>{review.title}</h4>
            </span>
            <span>{review.rating} ⭐</span>
        </div>
        <div className='review-body'>
            <p className='review-text'>
              {review.text}
            </p>
        </div>
        <hr />
    </div>
  )
}

export default Reviews