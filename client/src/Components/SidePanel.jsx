import dashLogo from "../assets/dashboard.svg";
import transactionLogo from "../assets/transactions.svg";
import schedLogo from "../assets/schedules.svg";
import userLogo from "../assets/users.svg";
import setLogo from "../assets/setting.svg";
import hamburgerIcon from "../assets/hamburger.svg";

export default function SidePanel() {
  return (
    <div className="w-full  px-3 py-4 md:p-8 text-white grid content-between md:h-screen md:w-72 bg-black rounded-xl">
      <div className="flex-none items-center md:items-start md:flex-col justify-between">

        <div className="flex items-center justify-between">

        
        <h1 className="font-bold text-3xl">Board.</h1>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-300"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-8 list-none">
            <li className="flex gap-4 my-8 font-semibold">
              <img src={dashLogo} alt="" />
              Dashboard
            </li>
            <li className="flex gap-4 my-8">
              <img src={transactionLogo} alt="" />
              Transactions
            </li>
            <li className="flex gap-4 my-8">
              <img src={schedLogo} alt="" />
              Schedules
            </li>
            <li className="flex gap-4 my-8">
              <img src={userLogo} alt="" />
              Users
            </li>
            <li className="flex gap-4 my-8">
              <img src={setLogo} alt="" />
              Settings
            </li>
          </ul>
        </div>
        
      </div>
      <div className="invisible w-0 h-0 md:visible md:w-full md:h-full self-end text-sm text-gray-200">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
    </div>
  );
}
