import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProductCard() {
    const data = {
        labels: [],
        datasets: [
          {
            label: '% of product',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(246, 220, 125, 1)',
                'rgba(238, 132, 132, 1)',
                'rgba(152, 216, 158, 1)'
            ],
          },
        ],
      };

      const options = {
        responsive: true,
        elements: {
            arc: {
              borderWidth: 0
            }
          }
      };
    return (
        <div className='bg-white rounded-2xl px-4 pt-4'>
            <div className='flex justify-between text-xl font-bold'>Top products</div>
            <div className='grid md:grid-cols-[1fr_2fr]'>
                <div className='mx-auto w-52 p-4'>
                    <Pie data={data} options={options}/>
                </div>
                <div className='p-8'>
                    <div>
                        <div className="flex items-center gap-4">
                            <div className='w-3 h-3 bg-[#98D89E] rounded-full'></div>
                            <div className='font-bold text-lg'>Basic tees</div>
                        </div>
                        <div className='pl-8 text-gray-400'>55%</div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <div className='w-3 h-3 bg-[#F6DC7D] rounded-full'></div>
                            <div className='font-bold text-lg'>Custom Short Pants</div>
                        </div>
                        <div className='pl-8 text-gray-400'>31%</div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <div className='w-3 h-3 bg-[#EE8484] rounded-full'></div>
                            <div className='font-bold text-lg'>Super Hoodies</div>
                        </div>
                        <div className='pl-8 text-gray-400'>14%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
