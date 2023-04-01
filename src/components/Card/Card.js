import React, { useEffect, useState } from 'react';
import Bookmarked from '../Bookmarked/Bookmarked';
import './Card.css'

const Card = () => {
    const [cards, setCards] = useState([]);

    useEffect( () =>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => console.log(data))
    } , [])
    return (
        <div className='main-container'>
            <div className='card-container'>
                <h1>This is card container</h1>
            </div>
            <div className='bookmarked-container'>
                <Bookmarked></Bookmarked>
            </div>

            {/* <div>
                <img src="../../images/blog1.png" alt="" />
                <div className='user-container'>
                    <div className='author-details'>
                        <img src="../../images/person1.png" alt="" />
                        <div>
                            <h3>Mr. Raju</h3>
                            <p>Date: 8 Mar (14 days ago)</p>
                        </div>
                    </div>
                    <div>
                        <p>9 min read</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Card;