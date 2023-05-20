import axios from 'axios';
import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const HarvestReports = () => {
  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoId = ao['agriculturalOfficer']['id'];

  const [harvest, setHarvest] = React.useState([]);
  const [vegetables, setVegetables] = React.useState([]);
  const [fruits, setFruits] = React.useState([]);
  const [rice, setRice] = React.useState([]);
  const [cropwise, setCropwise] = React.useState({
    Vegetables: 0,
    Fruits: 0,
    Rice: 0,
  });

  const getCropWiseTotalHarvest = () => {
    axios
      .get('http://localhost:8075/ao/getharvests')
      .then((res) => {
        const filteredHarvest = res.data.filter((harvest) => {
          return harvest.aoId === aoId;
        });
        setHarvest(filteredHarvest);

        console.log('Filtered Harvest', filteredHarvest);

        const vegetables = filteredHarvest.filter((harvest) => {
          return harvest.cropType === 'Vegetables';
        });

        setVegetables(vegetables);

        console.log('Vegetables', vegetables);

        // loop through vegetables array and get the total harvest
        const totalVegetablesHarvest = vegetables.reduce((total, harvest) => {
          return total + harvest.actualHarvest;
        }, 0);

        const fruits = filteredHarvest.filter((harvest) => {
          return harvest.cropType === 'Fruits';
        });

        setFruits(fruits);

        console.log('Fruits', fruits);

        const totalFruitsHarvest = fruits.reduce((total, harvest) => {
          return total + harvest.actualHarvest;
        }, 0);

        const rice = filteredHarvest.filter((harvest) => {
          return harvest.cropType === 'Rice';
        });

        setRice(rice);

        console.log('Rice', rice);

        const totalRiceHarvest = rice.reduce((total, harvest) => {
          return total + harvest.actualHarvest;
        }, 0);

        const updatedCropWise = {
          Vegetables: totalVegetablesHarvest,
          Fruits: totalFruitsHarvest,
          Rice: totalRiceHarvest,
        };

        setCropwise(updatedCropWise);

        console.log('Cropwise', cropwise);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const data = [
    { name: 'Rice', value: cropwise.Rice },
    { name: 'Fruits', value: cropwise.Fruits },
    { name: 'Vegetables', value: cropwise.Vegetables },
  ];

  React.useEffect(() => {
    getCropWiseTotalHarvest();
  }, []);

  const COLORS = ['#8f79d7', '#febf44', '#ec6074'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div
      className='containerPieChart'
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <PieChart width={600} height={400}>
        <Legend
          layout='vertical'
          verticalAlign='top'
          align='right'
          iconSize={20}
          iconType='wye'
        />
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default HarvestReports;
