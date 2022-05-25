import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='q-n-a container mt-4 max-w-7xl mx-auto px-12  my-10'>
            <h2 className='text-3xl text-center'>Blogs</h2>
            <p className='mt-5'>Question-1: How will you improve the performance of a React Application?</p>
            <p>Answer:</p>
            <p>
                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import().</li>
                <li>Use React.Fragment to Avoid Adding Extra Nodes to the DOM.</li>
                <li>Use Production Build. Wrapping up.</li>
            </p>
            <p className='mt-5'>Question-2: What are the different ways to manage a state in a React application?</p>
            <p>Answer:</p>
            <p>The Four Kinds of React State to Manage
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
            </p>
            <p className='mt-5'>Question-3: How does prototypical inheritance work?</p>
            <p>Answer:</p>
            <p>In this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance. JavaScript doesn't use classical inheritance. Instead, it uses prototypal inheritance. In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.</p>
            <p className='mt-5'>Question-4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
            <p>Answer:</p>
            <p>Hooks solve a wide variety of seemingly unconnected problems in React. IWith Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community. That's why [products, setProducts] = useState([]) is used to reuse the state. </p>
            <p className='mt-5'>Question-5: What is a unit test? Why should write unit tests?</p>
            <p>Answer:</p>
            <p>JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. These unit tests are then organized in the test suite. <br />
                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. </p>
        </div>
    );
};

export default Blogs;