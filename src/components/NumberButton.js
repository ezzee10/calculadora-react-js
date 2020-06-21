import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const NumeroBoton = ({ buttonValue }) => {

    const { handleSetDisplayValue } = useContext(CalcContext);

    return (
        <button
            type="button"
            className="button"
            onClick={() => handleSetDisplayValue(buttonValue)}
        >
            {buttonValue}
        </button>
    );
}

export default NumeroBoton;