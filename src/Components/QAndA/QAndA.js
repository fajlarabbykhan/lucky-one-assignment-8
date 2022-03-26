import React from 'react';
import './QAndA.css'
const QAndA = () => {
    return (
        <div >

            <h2 className='question'>Props Vs State</h2>
            <p>
                <h4 className='sp-color'>Props : </h4>
                Props are components that can only be read. It's an object that stores the value of a tag's attributes and functions similarly to HTML attributes. It allows data to be passed from one component to another. It's comparable to function arguments, and it can be supplied to the component in the same manner that function arguments can. Because props are immutable, we can't change them from within the component.
            </p>
            <p>
                <h4 className='sp-color'>State : </h4>
                The state is an updatable structure that can vary over time and is used to store data or information about the component. A state change can occur as a result of a user action or a system event. It is the react component's brain, determining the component's behavior and how it will render. A state should be as straightforward as feasible. It represents the local status or information of the component. It can only be accessed or modified from within the component or directly by the component.
            </p>
            <h2 className='question'>How UseState Works</h2>
            <p>
                useState is a Hook (function) that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value (not necessarily the starting state) and another function to update it.
            </p>
            <h2 className='question'>How React Works</h2>
            <p>
                A group of Facebook developers discovered that the Document Object Model (DOM) is slow while developing client-side apps. (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.) It specifies the logical structure of documents as well as how they are accessed and modified.) To speed things up, React uses a virtual DOM, which is essentially a JavaScript representation of a DOM tree. As a result, it will use the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.
                React elements, unlike browser DOM elements, are simple objects that are easy to generate. The DOM is updated to match the React elements by React DOM. This is because JavaScript is extremely fast, and it's worth keeping a DOM tree in it to speed up its manipulation.
                Although React was designed to be used in the browser, it can also be utilized in the server using Node.js due to its design.
            </p>
        </div>
    );
};

export default QAndA;