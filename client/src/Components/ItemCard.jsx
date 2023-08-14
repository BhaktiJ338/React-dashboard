

export default function ItemCard(props){
    return (
        <div className={props.deco}>
            <div className="flex justify-end"><img src={props.icon} /></div>
            <div>
                <div>{props.name}</div>
                <div className="text-xl font-bold">{props.val}</div>
            </div>
        </div>
    )
}