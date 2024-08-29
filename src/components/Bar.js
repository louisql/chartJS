import { Bar } from 'react-chartjs-2';
import  { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { barChartData } from '../api/data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); // Register all the components to inform chartjs we'll render those


export const BarGraph = () => {

    const options = { }


    
    return(
        <>
            <Bar data={barChartData} options={options}/>
        </>
    )
}