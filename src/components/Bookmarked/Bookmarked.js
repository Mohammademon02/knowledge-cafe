import React from 'react';
import './Bookmarked.css';

const Bookmarked = ({time,title}) => {

    return (
        <div>
            <div className='read-time'>
                <p>Spent time on read : {time} min</p>
            </div>
            <div className='bookmarked-blogs'>
                <p>Bookmarked Blogs : {title.length}</p>
                <div className='cart-container'>
                    {
                        title.map(title => 
                        <div className='single-cart'>
                            <h3
                                key={title}
                            >{title}</h3>
                        </div> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarked;