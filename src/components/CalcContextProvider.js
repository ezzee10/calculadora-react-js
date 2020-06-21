import React, { useState } from 'react';

export const CalcContext = React.createContext();

const CalcProvider = props => {

    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');
    const [functionType, setFunctionType] = useState('');

    //seteo el numero y me aseguro que no incluya multiples . en su numero y no tenga multiples ceros al principio
    const handleSetDisplayValue = num => {
        if ((!number.includes('.') || num !== '.') && number.length < 8) {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    //guardo el numero en un segundo state
    const handleSetStoredValue = () => {
        setStoredNumber(number);
        setNumber('');
    };

    //reinicio todos los states
    const handleClearValue = () => {
        setNumber('');
        setStoredNumber('');
        setFunctionType('');
    };

    //es para ir borrando el numero de valor en valor
    const handleBackButton = () => {
        if (number !== '') {
            const deletedNumber = number.slice(0, number.length - 1);
            setNumber(deletedNumber);
        }
    };

    //si numero existe entonces, le establezco un tipo de operación y la guardo en el state y almaceno el valor en el segundo state dejando number en 0
    //si numero no existe 
    const handleSetCalcFunction = type => {
        if (number) {
            setFunctionType(type);
            handleSetStoredValue();
        }
        if (storedNumber) {
            setFunctionType(type);
        }
    };

    //CAMBIO DE POSITIVO A NEGATIVO O NEGATIVO A POSITIVO EL SIGNO.
    const handleToggleNegative = () => {
        if (number) {
            if (number > 0) {
                setNumber(`-${number}`);
            } else {
                const positiveNumber = number.slice(1);
                setNumber(positiveNumber);
            }
        } else if (storedNumber > 0) {
            setStoredNumber(`-${storedNumber}`);
        } else {
            const positiveNumber = storedNumber.slice(1);
            setStoredNumber(positiveNumber);
        }
    };

    //realiza los cálculos, si existe numero y el numero almacenado auxiliar
    const doMath = () => {
        if (number && storedNumber) {
            switch (functionType) {
                case '+':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
                    break;
                case '-':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '/':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
                    break;
                case '*':
                    setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
                    break;
                default:
                    break;
            }
            setNumber('');
        }
    };

    return (
        <CalcContext.Provider
            value={{
                doMath,
                functionType,
                handleBackButton,
                handleClearValue,
                handleSetCalcFunction,
                handleSetDisplayValue,
                handleSetStoredValue,
                handleToggleNegative,
                number,
                storedNumber,
                setNumber,
            }}
        >
            {props.children}
        </CalcContext.Provider>
    )
};

export default CalcProvider;