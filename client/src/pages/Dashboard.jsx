import SidePanel from '../Components/SidePanel'
import LineChart from '../Components/LineChart'
import ProductCard from '../Components/ProductCard'
import ScheduleCard from '../Components/ScheduleCard'
import TopPanel from '../Components/TopPanel'
import ItemsDiv from '../Components/ItemsDiv'

export default function Dashboard(){
    return (
        <div className="md:p-8 md:flex overflow-x-hidden">
            <SidePanel />
            <div className='w-full p-4 md:mx-4 md:ml-12'>
                <TopPanel />
                <ItemsDiv />
                <LineChart />
                <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-8'>
                    <ProductCard />
                    <ScheduleCard />
                </div>
            </div>
        </div>
    )
}