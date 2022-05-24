import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    return (
        <div className='one-review-card'>
            <div class="card w-50 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title review-ratings">{review.review} <FontAwesomeIcon className='review-awesome' icon={faStar}></FontAwesomeIcon> </h2>
                    <p className='review-p'>{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;