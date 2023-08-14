import searchLogo from '../assets/search.svg'
import bellIcon from '../assets/bell.svg'
import profile from '../assets/profile.png'
import ItemCard from '../Components/ItemCard'
import item1 from '../assets/item1.svg'
import item2 from '../assets/item2.svg'
import item3 from '../assets/item3.svg'
import item4 from '../assets/item4.svg'
import SidePanel from '../Components/SidePanel'
import LineChart from '../Components/LineChart'
import ProductCard from '../Components/productCard'
import ScheduleCard from '../Components/ScheduleCard'

export default function Dashboard(){
    return (
        <div className="md:p-8 md:flex overflow-x-hidden">
            <SidePanel />
            <div className='w-full p-4 md:mx-4 md:ml-12'>
                <div className='invisible w-0 h-0 md:h-fit md:w-full md:visible flex justify-between'>
                    <div className='text-2xl font-semibold'>Dashboard</div>
                    <div className="justify-end flex gap-8">
                        <div className='py-1 px-2 rounded-xl bg-white flex text-gray-400 gap-32'>
                            <div>Search...</div>
                            <img src={searchLogo}/>
                        </div>
                        <img src={bellIcon} />
                        <img className="rounded-full" src={profile} />
                    </div>
                </div>

                <div className='gap-4 md:my-8 grid grid-cols-2 md:grid-cols-4 md:gap-8'>
                    <ItemCard name="Total Revenues" icon={item1} val="$2,129,430" deco="p-4 bg-[#DDEFE0] rounded-2xl"/>
                    <ItemCard name="Total Transactions" icon={item2} val="1,520" deco="p-4 bg-[#F4ECDD] rounded-2xl"/>
                    <ItemCard name="Total Likes" icon={item3} val="9,721" deco="p-4 bg-[#EFDADA] rounded-2xl"/>
                    <ItemCard name="Total Users" icon={item4} val="892" deco="p-4 bg-[#DEE0EF] rounded-2xl"/>
                </div>
                <LineChart />
                <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-8'>
                    <ProductCard />
                    <ScheduleCard />
                </div>
            </div>
        </div>
    )
}