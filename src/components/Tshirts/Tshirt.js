import React from 'react';
import './Tshirts.css'

const Tshirt = (props) => {
    const {handleAddtoCart, tshirt} = props;
    const { name, picture } = props.tshirt;
    return (
        <div className='single-tshirt'>
            <img src={picture} alt="" />
            <p>Name: {name}</p>
            <button onClick={() => handleAddtoCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;