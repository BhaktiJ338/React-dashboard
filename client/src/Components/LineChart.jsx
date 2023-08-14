import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js' 
import { useState } from 'react';
import axios from 'axios';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

export default function LineChart(){
    // const [data, setData] = useState({});

    // async function handleChange(e){

    //     await axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=500&count=6')
    //     .then( (response) =>{
    //         console.log(response.data);
    //         // setData(
    //         //     {
    //         //         labels:["", "week1", "week2", "week3", "week4", ""],
    //         //         datasets:[
    //         //             {
    //         //                 data:response.data,
    //         //                 backgroundColor: "transparent",
    //         //                 borderColor : '#9BDD7C',
    //         //                 pointBorderColor: 'transparent',
    //         //                 tension:0.5
    //         //             }
    //         //             // {
    //         //             //     data:[150,80,300,100,450, 300],
    //         //             //     backgroundColor: "transparent",
    //         //             //     borderColor : '#E9A0A0',
    //         //             //     pointBorderColor: 'transparent',
    //         //             //     tension:0.5
    //         //             // }
    //         //         ]
    //         //     }
    //         // )
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     })
        
        
    // }

    const data = {
        labels:["", "week1", "week2", "week3", "week4", ""],
        datasets:[
            {
                data:[300,100,250,150,300, 100],
                backgroundColor: "transparent",
                borderColor : '#9BDD7C',
                pointBorderColor: 'transparent',
                tension:0.5
            },
            {
                data:[150,80,300,100,450, 300],
                backgroundColor: "transparent",
                borderColor : '#E9A0A0',
                pointBorderColor: 'transparent',
                tension:0.5
            }
        ]
    }

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
                    <select className='border-0 text-gray-500'>
                        <option value="May-June">May-June 2023</option>
                        <option value="April-May">April-May 2023</option>
                        <option value="March-April">March-April 2023</option>
                    </select>
                    </div>
                <div className='flex gap-8'>
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
                <Line data={data} options={options}></Line>
            </div>
        </div>
    )
}