import './DummyComponent.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { useContext, useState, useEffect } from "react";
import { AppContext } from '../AppContext';
import CircularLoader from '../components/CircularLoader';
import computeHeight from '../utils/computeHeight';

const chartSetting = {
  xAxis: [
    {
      label: 'Total checkout price, $',
    },
  ],
};

const valueFormatter = (value) => `${value}$`;

const DummyChart = () => {
  const { showFrame, isLandscape } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();
        console.log(data);
        const carts = data.carts.map((c) => ({ id: c.id, total: c.total }));
        console.log(carts);
        carts.unshift({ id: 0, total: Math.round(carts.reduce((S, c) => S + c.total, 0) / carts.length) });

        setData(carts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array ensures that this effect runs only once, similar to componentDidMount

  if (isLoading) {
    return <CircularLoader />; // You can replace this with a loading spinner or any other loading indicator
  } else {

    return (
      <section
        className='chart-container'
        style={
              computeHeight(showFrame, isLandscape,
                '45dvh', '45dvh', 'calc(69dvh - 5px)', '80dvh')
        }
      >
        <BarChart
          dataset={data}
          yAxis={[{ scaleType: 'band', dataKey: 'id' }]}
          series={[{ dataKey: 'total', label: 'Marketing statistics - prices', valueFormatter }]}
          layout="horizontal"
          {...chartSetting}
        />
      </section>
    );
  }

};

export default DummyChart;
