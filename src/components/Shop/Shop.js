import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirts/Tshirt';
import './Shop.css';

const Shop = () => {
    const [tshirts, settshirts] = useTshirts();
    const [cart, setCart] = useState([]);
    const handleAddtoCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('one item selected')
        }


    }
    const handleRemoveFromCart = (selectedItem) => {
        // console.log(selectedItem);
        const newCart = cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setCart(newCart);

    }
    return (

        <div className='shop-container'>
            <div className='tshirt-container'>

                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;