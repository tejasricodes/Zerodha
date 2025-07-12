import { useNavigate } from "react-router-dom";
import { useState } from "react";

import cart from "../assets/cart.svg";
import notification from "../assets/notification.svg";
import kitelogo from "../assets/kitelogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard"); // default active tab

  const tabs = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Bids", path: "/bids" },
    { name: "Funds", path: "/funds" },
  ];

  return (
    <nav className="h-[52px] bg-[#1c1c1c] flex justify-between px-6">
      {/* Left Section - NIFTY and SENSEX */}
      <div className="flex gap-9 ml-1">
        <div className="flex gap-2 mt-4">
          <p className="text-white font-medium">
            NIFTY <span className="text-green-600 text-sm">25637.80</span>
          </p>
          <p className="text-gray-400 text-sm my-0.5">88.80 (0.35%)</p>
        </div>
        <div className="flex gap-2 mt-4">
          <p className="text-white font-medium">
            SENSEX <span className="text-green-600 text-sm">84058.90</span>
          </p>
          <p className="text-gray-400 text-sm my-0.5">303.30 (0.36%)</p>
        </div>
        <div className="bg-[#2a2a2a] h-[52px] w-[2px] py-0 mx-1"></div>
        <img src={kitelogo} alt="logo" className="h-[35px] mt-2 pr-8 " />
      </div>

      {/* Right Section - Menu + Icons + Name */}
      <div className="flex gap-6 items-center">
        <ul className="text-white flex gap-6 py-4 ">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                navigate(tab.path);
              }}
              className={`cursor-pointer hover:text-[#ff5722] text-[14px] ${
                activeTab === tab.name ? "text-[#ff5722]" : ""
              }`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <div className="bg-[#2a2a2a] h-[52px] w-[2px]"></div>
        <img src={cart} alt="cart" className="h-[25px] " />
        <img src={notification} alt="notification" className="h-[25px] " />
       <span className="h-6 w-6 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 text-[12px] border border-red-300/20 backdrop-blur-[2px]">
  T
</span>

        <p className="text-white">Tejasri</p>
      </div>
    </nav>
  );
}
