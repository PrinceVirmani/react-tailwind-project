import "./App.css";
import Table from "./components/Table";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import { RevenueCard } from "./components/RevenueCard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Sidebar />
      </div>

      <div className="">
        <Navbar />
      </div>

      <div className=" mt-16 ml-64 w-9/12">
        <div className="flex justify-between ">
          <div>OverView</div>
          <div>
            <Dropdown />
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <RevenueCard
              title={"Next Payout"}
              amount={"2,312.23"}
              orderCount={23}
            />
            <div className="flex justify-between bg-[#1698fa] rounded-t">
              <div>Next Payment Date:</div>
              <div> Today, 4:00PM</div>
            </div>
          </div>

          <RevenueCard
            title={"Amount Pending"}
            amount={"92,312.20"}
            orderCount={13}
          />
          <RevenueCard
            title={"Amount Processed"}
            amount={"23,92,312.19"}
            orderCount={""}
          />
        </div>
        <div>Transactions | Month</div>
      </div>

      <div className=" mt-16 ml-64 w-9/12">
        {" "}
        <Table />
      </div>
    </div>
  );
}

export default App;
