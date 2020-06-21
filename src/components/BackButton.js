import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const NumeroBoton = () => {

    const { handleBackButton } = useContext(CalcContext);

    return (
        <button
            className="button"
            type="button"
            onClick={() => handleBackButton()}
        >
            &#8592;
        </button>
    );
}

export default NumeroBoton;