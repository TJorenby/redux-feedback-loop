import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import './StarRating.scss';

const StarRating = (props) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const ratingToSend = useState(rating);

    return (
        < div >
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() =>
                                    setRating(ratingValue)}
                                onChange={() => props.setRating(ratingValue)} // onChange is passing the value of ratingValue to Question component

                            />
                            <FaStar
                                className="star"
                                size={30}
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />

                        </label >



                    );
                })


            }
        </div >

    );
};

export default StarRating;



