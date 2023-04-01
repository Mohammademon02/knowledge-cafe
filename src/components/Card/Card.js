import React from 'react';
import './Card.css'

const Card = (props) => {
    const { authorImage, authorName, blogTitle, image, readTime, publishDate  } = props.card;
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
                <p>{readTime}</p>
            </div>
            <h2 className='blog-title'>{blogTitle}</h2>
            <a href="">Mark as read</a>
           </div>
        </div>
    );
};

export default Card; 