import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const IMCChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const countries = [
      'Japón', 'Corea', 'Suiza', 'Noruega', 'Italia', 'Austria', 'Francia',
      'Dinamarca', 'Países Bajos', 'Suecia', 'Portugal', 'Alemania', 'Irlanda',
      'España', 'Finlandia', 'Luxemburgo', 'Hungría', 'República Checa', 'Israel',
      'Canadá', 'Reino Unido', 'Grecia', 'Nueva Zelanda', 'Australia', 'Islandia', 'México', 'Estados Unidos'
    ];

    const bmiValues = [
      3.2, 3.2, 7.7, 7.9, 8.3, 8.5, 9.1, 9.4, 9.5, 9.7, 10.1, 12.9, 12.8,
      13.0, 13.0, 13.1, 14.3, 14.8, 18.4, 18.8, 20.9, 21.7, 22.4, 23.0, 24.2, 30.0, 30.6
    ];

    setData({
      labels: countries,
      datasets: [{
        label: 'Porcentaje de la población con IMC >= 30',
        data: bmiValues,
        backgroundColor: 'blue'
      }]
    });
  }, []);

  return (
    <div>
      <h2>Estadística de IMC en Diversos Países</h2>
      <div style={{ width: '800px', height: '455px', margin: '0 auto' }}>
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Porcentaje de la Población con IMC >= 30 en Diversos Países',
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 35,
                title: {
                  display: true,
                  text: 'Porcentaje'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Países'
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default IMCChart;
