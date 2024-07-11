import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BolsaChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const dates = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const mexicoPrices = [100, 105, 110, 108, 115, 120, 118, 125, 130, 135, 138, 140];
    const europePrices = [80, 85, 90, 92, 95, 100, 98, 102, 105, 110, 112, 115];

    setData({
      labels: dates,
      datasets: [
        {
          label: 'Bolsa Mexicana de Valores',
          data: mexicoPrices,
          borderColor: 'green',
          fill: false,
        },
        {
          label: 'Bolsa de Valores de Europa',
          data: europePrices,
          borderColor: 'blue',
          fill: false,
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>Comparativa de la Bolsa Mexicana de Valores con la Bolsa de Valores de Europa</h2>
      <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Comparativa de la Bolsa Mexicana de Valores con la Bolsa de Valores de Europa',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BolsaChart;
