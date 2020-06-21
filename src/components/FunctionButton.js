import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const NumeroBoton = ({ buttonValue }) => {

    const { handleSetCalcFunction } = useContext(CalcContext);

    return (
        <button
            className="button"
            type="button"
            onClick={() => handleSetCalcFunction(buttonValue)}
        >
            {buttonValue}
        </button>
    );
}

export default NumeroBoton;