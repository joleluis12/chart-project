import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const MortalityChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const causes = [
      'Cardiopatías isquémicas', 'Enfermedades cerebrovasculares', 
      'Tumores malignos de tráquea, bronquios y pulmón', 
      'Enfermedades crónicas de las vías respiratorias bajas', 
      'Accidentes', 'Tumores malignos de colon, unión rectosigmoidea, recto, ano y conducto anal', 
      'Neumonía', 'Diabetes mellitus', 'Tumores malignos de páncreas', 
      'Tumores malignos de mama', 'Enfermedad hepática crónica', 
      'Enfermedades del riñón y el uréter', 'Tumores malignos del estómago', 
      'Trastornos mentales y del comportamiento debidos al consumo de alcohol', 
      'VIH', 'Drogodependencia'
    ];

    const maleRates = [140, 100, 50, 40, 40, 30, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10];
    const femaleRates = [120, 80, 30, 50, 20, 20, 10, 10, 10, 30, 20, 10, 10, 10, 5, 5];

    setData({
      labels: causes,
      datasets: [
        {
          label: 'Hombre',
          data: maleRates,
          backgroundColor: 'blue',
        },
        {
          label: 'Mujer',
          data: femaleRates,
          backgroundColor: 'orange',
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>Causes of Death – Normalized Mortality Rate, EU-28, 2016</h2>
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
                text: 'Causes of Death – Normalized Mortality Rate, EU-28, 2016 (per 100,000 inhabitants)',
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Rate per 100,000 inhabitants'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Causes'
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default MortalityChart;
