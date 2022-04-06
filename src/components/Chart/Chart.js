import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Chart.css'

const Chart = ({datas}) => {
    console.log(datas);

    return (
       <div className='chart'>
            <div className='chart-child'>
        <LineChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
        <h2 className='draw'>Line Chart</h2>














        
        </div>
           <div className='chart-child'>
           <BarChart
            width={800} 
            height={400} 
            data={datas}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              >
          <Bar dataKey="sell" fill="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          
        </BarChart>
        <h2 className='draw'>Bar Chart</h2>
           </div>
       </div>
        
    );
};

export default Chart;