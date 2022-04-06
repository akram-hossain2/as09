import React from 'react';
import Chart from '../Chart/Chart';
import useDataChart from '../useDataChart/useDataChart';

const Dashboard = () => {
    const [datas,setData]=useDataChart();
    
    return (
        <div>
            <Chart datas={datas}></Chart>
        </div>
    );
};

export default Dashboard;