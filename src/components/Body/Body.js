import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';
import Bookmarked from '../Bookmarked/Bookmarked';

const Body = () => {
    
     const [cards, setCards] = useState([]);

     useEffect( () =>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setCards(data))
     } , [])

    
    const handleMarkAsRead = () => {
       
    }

    return (
        <div className='main-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <Card
                    card={card}
                    key={card.id}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Card>)
                }
            </div>

            <div className='bookmarked-container'>
                <Bookmarked></Bookmarked>
            </div>
        </div>
    );
};

export default Body;