import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const Display = () => {

    const { number, storedNumber, functionType } = useContext(CalcContext);

    return (
        <div className="display">
            <h2>{
                (!number.length && !storedNumber) ?
                    '0' :
                    number || storedNumber}
            </h2>

            <p>{!storedNumber ? 'Ingrese los números' : `${storedNumber} ${functionType} ${number}`}</p>
        </div>
    );
}

export default Display;