import React from 'react';
import PesoDolarChart from './components/PesoDolarChart';
import VideojuegosChart from './components/VideojuegosChart';
import BolsaChart from './components/BolsaChart';
import EnfermedadesChart from './components/EnfermedadesChart';
import IMCChart from './components/IMCChart';

function App() {
  return (
    <div className="App">
      <h1>Panel de Visualización de Datos</h1>
      <PesoDolarChart />
      <VideojuegosChart />
      <BolsaChart />
      <EnfermedadesChart />
      <IMCChart />
    </div>
  );
}

export default App;
