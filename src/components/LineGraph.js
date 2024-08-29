import {Line} from 'react-chartjs-2';
import  { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { lineChartData } from '../api/dataLineGraph';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend); // Register all the components to inform chartjs we'll render those



export const LineGraph = () => {
    const options = {}

    return (
        <Line options={options} data={lineChartData} />
    )
}