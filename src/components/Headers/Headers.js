import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css'
const Headers = () => {
    return (
        <div>
            <h1>this is header page</h1>
            <nav>
                <Link to ='/shop'>shop</Link>
                <Link to ='/order'>orders</Link>
                <Link to ='/about'>about</Link>
                <Link to ='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Headers;