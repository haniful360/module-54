import React from 'react';

const Cart = ({ cart, handleRemoveFromCart, tshirt }) => {
    // const {cart} = props;
    return (
        <div>
            <h1>selected Item:{cart.length}</h1>
            {
                cart.map(tshirt => <p>
                    {tshirt.name} 
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>

                </p>)
            }
        </div>
    );
};

export default Cart;