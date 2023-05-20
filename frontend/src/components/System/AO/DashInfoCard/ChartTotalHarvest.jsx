import axios from 'axios';
import React, { useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const ChartTotalHarvest = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const ao = JSON.parse(localStorage.getItem('agriofficer'));
  const aoId = ao['agriculturalOfficer']['id'];

  console.log(currentYear);

  const [harvest, setHarvest] = React.useState([]);

  const [months, setMonths] = React.useState({
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  });

  const [monthValues, setMonthValues] = React.useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  //function to get harvest of each month
  const getMonthlyHarvest = () => {
    axios
      .get('http://localhost:8075/ao/getharvests')
      .then((res) => {
        const filteredHarvest = res.data.filter((harvest) => {
          return harvest.aoId === aoId && harvest.year == currentYear;
        });
        setHarvest(filteredHarvest);

        // Create a copy of the months state
        const updatedMonths = { ...months };

        // Loop through the filteredHarvest array
        filteredHarvest.forEach((harvest) => {
          const { month } = harvest;

          // Check if the month exists in the updatedMonths object
          if (updatedMonths.hasOwnProperty(month)) {
            // If the month exists, push the value into its array
            updatedMonths[month].push(harvest);
          }
        });

        // Update the months state with the updatedMonths object
        setMonths(updatedMonths);

        const janVal = months.January.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const febVal = months.February.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const marVal = months.March.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const aprVal = months.April.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const mayVal = months.May.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const junVal = months.June.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const julVal = months.July.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const augVal = months.August.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const sepVal = months.September.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const octVal = months.October.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const novVal = months.November.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const decVal = months.December.reduce((acc, curr) => {
          return acc + curr.actualHarvest;
        }, 0);

        const updatedMonthValues = {
          January: janVal,
          February: febVal,
          March: marVal,
          April: aprVal,
          May: mayVal,
          June: junVal,
          July: julVal,
          August: augVal,
          September: sepVal,
          October: octVal,
          November: novVal,
          December: decVal,
        };

        setMonthValues(updatedMonthValues);

        console.log('month val', monthValues);

        console.log(monthValues);
        console.log(updatedMonths);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getMonthlyHarvest();
  }, []);

  //chart data
  const data = [
    {
      name: 'January',
      harvest: monthValues.January,
    },
    {
      name: 'February',
      harvest: monthValues.February,
    },
    {
      name: 'March',
      harvest: monthValues.March,
    },
    {
      name: 'April',
      harvest: monthValues.April,
    },
    {
      name: 'May',
      harvest: monthValues.May,
    },
    {
      name: 'June',
      harvest: monthValues.June,
    },
    {
      name: 'July',
      harvest: monthValues.July,
    },
    {
      name: 'August',
      harvest: monthValues.August,
    },
    {
      name: 'September',
      harvest: monthValues.September,
    },
    {
      name: 'October',
      harvest: monthValues.October,
    },
    {
      name: 'November',
      harvest: monthValues.November,
    },
    {
      name: 'December',
      harvest: monthValues.December,
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
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Bar
          dataKey='harvest'
          fill='#8884d8'
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartTotalHarvest;
