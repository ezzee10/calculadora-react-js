import React from 'react';
import Calculadora from './components/Calculadora';
import CalcProvider from './components/CalcContextProvider';

function App() {
  return (
    <CalcProvider>
      <Calculadora />
    </CalcProvider>

  );
}

export default App;
