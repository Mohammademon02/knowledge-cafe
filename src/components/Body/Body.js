import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';
import Bookmarked from '../Bookmarked/Bookmarked';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        setTitle(blogTitle);
        const newTitle = [...title,blogTitle]
        setTitle(newTitle);
        const tostData = title.find(pd => pd === blogTitle);
        if (tostData) {
            toast("You have already bookmarked this")
        }
        else{
            const newTitle = [...title,blogTitle];
            setTitle(newTitle);
        }
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

            <div className='bookmark-container'>
                <Bookmarked
                time={time}
                title={title}
                ></Bookmarked>
            </div>
        </div>
    );
};

export default Body;