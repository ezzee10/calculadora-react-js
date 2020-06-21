import React, { Fragment } from 'react';
import Display from './Display';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import EqualButton from './EqualButton';
import ClearButton from './ClearButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';

const Calculadora = () => {
    return (
        <Fragment>
            <div className="principal-box">
                <h1>Calculadora</h1>
                <Display />
                <div className="box-numbers">
                    <ClearButton />
                    <BackButton />
                    <NegativeButton />
                    <FunctionButton buttonValue="/" />
                    <NumberButton buttonValue={7} />
                    <NumberButton buttonValue={8} />
                    <NumberButton buttonValue={9} />
                    <FunctionButton buttonValue="*" />
                    <NumberButton buttonValue={4} />
                    <NumberButton buttonValue={5} />
                    <NumberButton buttonValue={6} />
                    <FunctionButton buttonValue="-" />
                    <NumberButton buttonValue={1} />
                    <NumberButton buttonValue={2} />
                    <NumberButton buttonValue={3} />
                    <FunctionButton buttonValue="+" />
                    <div className="zero-button">
                        <NumberButton buttonValue={0} />
                    </div>
                    <NumberButton buttonValue="." />
                    <EqualButton />
                </div>
            </div>
        </Fragment>
    );

}

export default Calculadora;
