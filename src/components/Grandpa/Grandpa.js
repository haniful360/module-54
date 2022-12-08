import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './Grandpa.css';

 export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house,setHouse] = useState(1)
    const handleGift = () =>{
         let newHouse = house + 1;
        setHouse(newHouse);
    }
    // const ornament = 'diamond ring'
    
    return (
        <RingContext.Provider value={'diamon ring'}>
            <div>
            <h2>Granfather: {house}</h2>
            <button onClick={handleGift}>house</button>
            <div className='granpa'>
                <Father house={house}></Father>
                <Uncle></Uncle>
                <Unty></Unty>
              
            </div>
           
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;