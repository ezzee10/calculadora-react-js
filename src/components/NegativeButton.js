import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const NumeroBoton = () => {

    const { handleToggleNegative } = useContext(CalcContext);

    return (
        <button
            className="button"
            type="button"
            onClick={() => handleToggleNegative()}
        >
            -/+
        </button>
    );
}

export default NumeroBoton;