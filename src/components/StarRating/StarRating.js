import React, { useState } from 'react';

//Style Imports
import { FaStar } from 'react-icons/fa';
import './StarRating.scss';

const StarRating = (props) => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        < div >
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    // This takes an array of 5 items and returns the following element. The "input" element is what logs the ratingValue (that we pass to Question components, and then to Store). These are hidden. FaStar is displayed and is set up to change color based on MouseEnter and MouseLeave.

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
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#C0C0C0"}
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



