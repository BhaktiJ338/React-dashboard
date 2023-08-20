import ItemCard from "../Components/ItemCard";
import item1 from "../assets/item1.svg";
import item2 from "../assets/item2.svg";
import item3 from "../assets/item3.svg";
import item4 from "../assets/item4.svg";

export default function ItemsDiv() {
  return (
    <div className="gap-4 md:my-8 grid grid-cols-2 md:grid-cols-4 md:gap-8">
      <ItemCard
        name="Total Revenues"
        icon={item1}
        val="$2,129,430"
        deco="p-4 bg-[#DDEFE0] rounded-2xl"
      />
      <ItemCard
        name="Total Transactions"
        icon={item2}
        val="1,520"
        deco="p-4 bg-[#F4ECDD] rounded-2xl"
      />
      <ItemCard
        name="Total Likes"
        icon={item3}
        val="9,721"
        deco="p-4 bg-[#EFDADA] rounded-2xl"
      />
      <ItemCard
        name="Total Users"
        icon={item4}
        val="892"
        deco="p-4 bg-[#DEE0EF] rounded-2xl"
      />
    </div>
  );
}
