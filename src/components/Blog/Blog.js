import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h3>1) What is difference between state and props ?</h3>
                <p>Answer : <b>Props :</b> Props allow you to pass data from one component to other components as an argument. 	Props are external and controlled by whatever renders the component.
                    <br />
                    <b>State :</b> State holds information about the components. The State is internal and controlled by the React Component itself.
                </p>
            </div>
            <div>
                <h3>2) How does useState work ?</h3>
                <p>Answer : This hook accepts an argument, this will be the initial state. When invoked this hook returns an array of two variables. The first being the current state and the second being the setter for our state.Our setter behaves similar to the setter of our classic state. It accepts a value or a function with the currentState as argument.When you call the setter and the state is different, it will trigger a rerender starting from the component where that useState has been used.
                </p>
            </div>
            <div>
                <h3>3) Purpose of useEffect other than fetching data?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
                </p>
            </div>
            <div>
                <h3>4) How Does React work ?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                </p>
            </div>
        </div>
    );
};

export default Blog;