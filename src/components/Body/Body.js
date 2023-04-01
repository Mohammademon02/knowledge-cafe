import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';
import Bookmarked from '../Bookmarked/Bookmarked';

const Body = () => {
    
     const [cards, setCards] = useState([])
     const [time, setTime] = useState([0])
     const [title, setTitle] = useState([])

     useEffect( () =>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setCards(data))
     } , [])

    
    const handleMarkAsRead = (readTime) => {
        const newTime = parseFloat(time + readTime);
       setTime(newTime);
    }

    const handleBookmarked = (blogTitle) =>{
        const newTitle = [...title,blogTitle]
        setTitle(newTitle)
    }




    return (
        <div className='main-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <Card
                    card={card}
                    key={card.id}
                    handleMarkAsRead={handleMarkAsRead}
                    handleBookmarked={handleBookmarked}
                    ></Card>)
                }
            </div>

            <div>
                <Bookmarked
                time={time}
                title={title}
                ></Bookmarked>
            </div>
        </div>
    );
};

export default Body;