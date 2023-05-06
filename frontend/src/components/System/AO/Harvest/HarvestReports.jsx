import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

const HarvestReports = () => {
  const data = [
    { name: 'Rice', value: 400 },
    { name: 'Fruits', value: 300 },
    { name: 'Vegetables', value: 300 },
  ];

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
        dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div
      className='containerPieChart'
      style={{ display: 'flex', justifyContent: 'center' }}>
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
          dataKey='value'>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default HarvestReports;
