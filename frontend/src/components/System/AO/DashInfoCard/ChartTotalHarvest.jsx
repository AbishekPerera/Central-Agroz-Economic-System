import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const ChartTotalHarvest = () => {
  const data = [
    {
      name: 'January',
      harvest: 238,
    },
    {
      name: 'February',
      harvest: 302,
    },
    {
      name: 'March',
      harvest: 158,
    },
    {
      name: 'April',
      harvest: 450,
    },
    {
      name: 'May',
      harvest: 210,
    },
    {
      name: 'June',
      harvest: 0,
    },
    {
      name: 'July',
      harvest: 0,
    },
    {
      name: 'August',
      harvest: 0,
    },
    {
      name: 'September',
      harvest: 0,
    },
    {
      name: 'October',
      harvest: 0,
    },
    {
      name: 'November',
      harvest: 0,
    },
    {
      name: 'December',
      harvest: 0,
    },
  ];

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };

  return (
    <div>
      <BarChart
        width={1100}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Bar
          dataKey='harvest'
          fill='#8884d8'
          shape={<TriangleBar />}
          label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartTotalHarvest;
