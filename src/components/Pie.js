import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { pieChartData } from '../api/data';

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => { 
    const options = {}

    return (
        <>
            <Pie data={pieChartData} options={options} />
        </>
    )

}