import React, { useState } from 'react';
import Botones from './componentes/BotoneraFechas';
import './App.css';


function App() {
  const [incremento, setIncremento] = useState(1);

  const handleIncrementoChange = (e) => {
    const nuevoIncremento = parseInt(e.target.value);
    setIncremento(nuevoIncremento);
  };

  return (
    <div className="App">
       <Botones/>
    </div>
  );
}

export default App;
