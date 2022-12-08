import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // const {cart} = props;

    // conditional rendering
    // let command;
    // if (cart.length === 0) {
    //     command = <p>Plase add one item..</p>
    // }
    // else if (cart.length === 1) {
    //     command = <p>Please add more...</p>
    // }
    // else {
    //     command = <p>Thanks for adding item</p>
    // }
    // condition ? true: false



    return (
        <div>
            <h1>selected Item:{cart.length}</h1>
            {/* {command} */}
            {cart.length !== 4 ? <p>keep adding</p> : <p>remove all</p>}
            {cart.length === 0 || <p style={{ color: "lime" }} className='lime'>Yah! you are buying</p>}
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>

                </p>)
            }
            {cart.length === 3 && <p>triangol</p>}
        </div>
    );
};

export default Cart;