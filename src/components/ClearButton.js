import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const NumeroBoton = () => {

    const { handleClearValue } = useContext(CalcContext);

    return (
        <button
            type="button"
            className="button"
            onClick={() => handleClearValue()}
        >
            AC
        </button>
    );
}

export default NumeroBoton;