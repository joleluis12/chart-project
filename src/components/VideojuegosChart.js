import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const VideojuegosChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const apiKey = '7cfba92dab9e4bd8b10b3d5a7428c871'; 

  useEffect(() => {
    const fetchVideoGamesData = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games`, {
          params: {
            key: apiKey,
            dates: '2023-01-01,2023-12-31',
            ordering: '-added'
          }
        });
        console.log('Response:', response.data);
        const gamesData = response.data.results.slice(0, 10);
        const labels = gamesData.map(game => game.name);
        const popularity = gamesData.map(game => game.added); 

        setData({
          labels,
          datasets: [{
            label: 'Popularidad (veces añadido)',
            data: popularity,
            backgroundColor: 'blue'
          }]
        });
      } catch (error) {
        console.error('Error al obtener datos de videojuegos', error);
      }
    };

    fetchVideoGamesData();
  }, []);

  return (
    <div>
      <h2>Videojuegos Más Populares en 2023</h2>
      <div style={{ width: '600px', height: '400px', margin: '0 auto' }}>
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { 
                display: false
              },
              title: { 
                display: true, 
                text: 'Videojuegos Más Populares en 2023'
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default VideojuegosChart;
