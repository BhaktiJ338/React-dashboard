import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js' 
import { useState, useEffect } from 'react';
import axios from 'axios';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

export default function LineChart(){
    const [chartData, setChartData] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState('May-June');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}`+`${selectedMonth}`).then(response => {
          const fetchedData = response.data; 
          console.log(fetchedData);
    
          const updatedChartData = {
            labels: ["", "week1", "week2", "week3", "week4", ""],
            datasets: [
              {
                data: fetchedData.guestData,
                backgroundColor: "transparent",
                borderColor: '#9BDD7C',
                pointBorderColor: 'transparent',
                tension: 0.5,
              },
              {
                data: fetchedData.userData,
                backgroundColor: "transparent",
                borderColor: '#E9A0A0',
                pointBorderColor: 'transparent',
                tension: 0.5,
              },
            ],
          };
    
          setChartData(updatedChartData);
        }).catch(error => {
          console.error("Error fetching data:", error);
        });
      }, [selectedMonth]);
    
    
      const handleMonthChange = event => {
        setSelectedMonth(event.target.value);
      };

    const options = {
        plugins:{
            legend: {
                display: false,
            }
        },
        scales:{
            x:{
                grid:{display:false}
            },
            y:{
                min:0,
                max:500,
                ticks:{
                    stepSize:100,
                    callBack:(value)=> value + 'K'
                },
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }

    return(
        <div className='mt-8 md:mt-0 bg-white rounded-2xl px-8 pt-8'>
            <div className='flex justify-between'>
                <div>
                    <div className='text-xl font-bold'>Activities</div>
                    <select className='border-0 text-gray-500' value={selectedMonth} onChange={handleMonthChange}>
                        <option value="May-June">May-June 2023</option>
                        <option value="April-May">April-May 2023</option>
                        <option value="March-April">March-April 2023</option>
                    </select>
                    </div>
                <div className='md:flex gap-8'>
                    <div className="flex items-center gap-4">
                            <div className='w-3 h-3 bg-[#9BDD7C] rounded-full'></div>
                            <div>Guest</div>
                    </div>
                    <div className="flex items-center gap-4">
                            <div className='w-3 h-3 bg-[#E9A0A0] rounded-full'></div>
                            <div>User</div>
                    </div>
                </div>
            </div>
            <div className='h-64 p-4'>
                {chartData && <Line data={chartData} options={options}></Line>}
            </div>
        </div>
    )
}