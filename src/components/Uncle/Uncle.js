import React, { useContext } from 'react';
import {RingContext} from '../Grandpa/Grandpa'

const Uncle = ({ornament}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>uncle:{ring}</h2>
        </div>
    );
};

export default Uncle;