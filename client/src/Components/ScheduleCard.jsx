

export default function ScheduleCard(){
    return (
        <div className="bg-white rounded-2xl px-6 py-4">
            <div className="flex justify-between ">
                <div className="text-xl font-bold">Today’s schedule</div>
                <div className="text-sm text-gray-400">See all {'>'}</div>
            </div>

            <div className="m-4">
                <div className="border-l-4 border-[#9BDD7C] pl-4">
                    <h1>Meeting with suppliers from Kuta Bali</h1>
                    <h3>14.00-15.00</h3>
                    <h3>at Sunset Road, Kuta, Bali </h3>
                </div>
            </div>
            <div className="m-4">
                <div className="border-l-4 border-[#6972C3] pl-4">
                    <h1>Check operation at Giga Factory 1</h1>
                    <h3>18.00-20.00</h3>
                    <h3>at Central Jakarta </h3>
                </div>
            </div>
        </div>
    )
}