import Topnav from "../../components/topnav";
import view from "./images/view.svg";
import download from "./images/download.svg";
import family from "./images/family.svg";
import search from "./images/search.svg";
import { ChevronDown } from "lucide-react";

export default function Orders(){
   const tabItems = [
       { label: "Orders", value: "orders" },
       { label: "GTT", value: "gtt" },
       { label: "Baskets", value: "baskets" },
       { label: "SIP", value: "sip" },
       { label: "Alerts", value: "alerts" },
     ];
   
     return (
       <div className="px-4">
         <Topnav tabLabels={tabItems} defaultValue="orders" />
         {/* Heading section */}
         <div className="flex justify-between pt-4 pb-2">
         
             <h2
               style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}
             >
               Excecuted orders (1)
             </h2>
         
   
           <div className="justify-end flex gap-2 items-center">
             <div className="relative text-white text-sm">
               <span className="absolute left-3 top-2.5">
                 <img
                   src={search}
                   alt="search"
                   className="w-3.5 h-3.5 opacity-70"
                 />
               </span>
               <input
                 type="text"
                 placeholder="Search"
                 className="bg-[#1c1c1c] text-white text-sm pl-9 pr-3 py-1 rounded placeholder-gray-400 w-30 border focus:outline-none"
                 style={{
                   border: "1px solid #2a2a2a",
                 }}
                 onFocus={(e) => (e.target.style.border = "1px solid #2a2a2a")}
                 onBlur={(e) => (e.target.style.border = "1px solid #2a2a2a")}
               />
             </div>
   
             <p className="flex gap-2 items-center text-blue-500 text-[12px] cursor-pointer">
               <img src={family} className="h-3 w-3" />
               Family
             </p>
             <p className="flex gap-2 items-center text-blue-500 text-[12px] cursor-pointer">
               <img src={view} className="h-3 w-3" />
               Analytics
             </p>
             <p className="flex gap-2 items-center text-blue-500 text-[12px] cursor-pointer">
               <img src={download} className="h-3 w-3" />
               Download
             </p>
           </div>
         </div>
   

         {/* Orders Table */}
<div className="mt-6 max-w-[920px] text-white text-xs">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-t border-[#2a2a2a] text-gray-400 text-center ">
          <th className="py-4 px-2">Time</th>
          <th className="py-4 px-2">Type</th>
          <th className="py-4 px-2">Instrument</th>
          <th className="py-4 px-2">Product</th>
          <th className="py-4 px-2">Qty.</th>
          <th className="py-4 px-2 border-r border-[#2a2a2a]">Avg. price</th>
          <th className="py-4 px-2 text-right">Status</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr className="border-b border-[#2a2a2a]">
          <td className="py-2 px-2">12:24:27</td>
          <td className="py-2 px-2">
            <span className="bg-blue-500/10 text-blue-500 text-[12px] px-2 py-1 rounded-sm border border-blue-300/20 backdrop-blur-[2px]">BUY</span>
          </td>
          <td className="py-2 px-2">
            MAXHEALTH <sup className="text-[9px] text-gray-400 items-center justify-center ">NSE</sup>
          </td>
          <td className="py-2 px-2">CNC</td>
          <td className="py-2 px-2">0 / 1</td>
          <td className="py-2 px-2 border-r border-[#2a2a2a]">1,275.10</td>
          <td className="py-2 px-2 text-right">
            <span className="bg-[#2a2a2a] text-gray-400 text-[10px] px-2 py-1 rounded-sm">
              CANCELLED AMO
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Trades Dropdown */}
  <div className="mt-10 flex items-center gap-1 text-[20px] text-white cursor-pointer">
    Trades
    <span><ChevronDown size={25} className="text-white items-center" /></span>
  </div>
</div>


   
   
       </div>
     );
   }