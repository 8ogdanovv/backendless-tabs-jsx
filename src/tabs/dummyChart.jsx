import { BarChart } from '@mui/x-charts/BarChart';
import { useContext, useState, useEffect } from "react";
import { AppContext } from '../AppContext';
import CircularLoader from '../components/CircularLoader';
import computeHeight from '../utils/computeHeight';
import './DummyComponent.css';

const valueFormatter = (value) => '$' + value;

const DummyChart = () => {
  const { showFrame, isLandscape } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();
        const carts = data.carts.map((c) => ({ id: c.id, total: c.total, discount: c.discountedTotal }));
        // Unshift average price rounded to integer to first position
        carts.unshift({
          id: 0,
          total: Math.round(carts.reduce((S, c) => S + c.total, 0) / carts.length),
          discount: Math.round(carts.reduce((S, c) => S + c.discount, 0) / carts.length),
        });

        setData(carts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <CircularLoader />;
  } else {
    return (
      <section
        className='chart-container'
        style={ computeHeight(showFrame, isLandscape, '40.5dvh', '43.5dvh', '73.5dvh', '76.5dvh') }
      >
        <BarChart
          dataset={data}
          yAxis={[{ scaleType: 'band', dataKey: 'id' }]}
          series={[
            { dataKey: 'total', label: 'Cart total price', valueFormatter, color: '#0066cc' },
            { dataKey: 'discount', label: 'Cart discount', valueFormatter, color: '#ffcc00' },
          ]}
          layout="horizontal"
          xAxis={[{ label: 'Total checkout price, $' }]}
        />
      </section>
    );
  }
};

export default DummyChart;
