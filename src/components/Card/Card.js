import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import './Card.css'

const Card = (props) => {
    const { authorImage, authorName, blogTitle, image, readTime, publishDate  } = props.card;
    const handleMarkAsRead = props.handleMarkAsRead;
    
    return (
        <div>
           <div className='card-container'>
            <img className='card-image' src={image} alt="" />
            <div className='user-container'>
                <div className='author-details'>
                    <img src={authorImage} alt="" />
                    <div className='user-info'>
                        <h3>{authorName}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div>
                        <p>{readTime} <span className='bookmark-btn' ><FontAwesomeIcon icon={faBookmark} /></span> </p>
                </div>
            </div>
            <h2 className='blog-title'>{blogTitle}</h2>
            <p onClick={ () => handleMarkAsRead()} className='mark-btn' >Mark as read</p>
           </div>
        </div>
    );
};

export default Card; 
