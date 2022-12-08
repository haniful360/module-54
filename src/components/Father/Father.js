import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>father</h2>
            <Myself house= {house}></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;