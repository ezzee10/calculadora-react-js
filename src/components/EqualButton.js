import React, { useContext } from 'react';
import { CalcContext } from './CalcContextProvider';

const NumeroBoton = () => {

    const { doMath } = useContext(CalcContext);

    return (
        <button
            className="button"
            type="button"
            onClick={() => doMath()}
        >
            =
        </button>
    );
}

export default NumeroBoton;