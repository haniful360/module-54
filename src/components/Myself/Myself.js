import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const {house} = props
    return (
        <div>
            <h4>Myself</h4>
            <Special house = {house}></Special>
        </div>
    );
};

export default Myself;