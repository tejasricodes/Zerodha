import Navbar from "./components/navbar";
import CustomizedTables from "./components/table";
import { Outlet } from "react-router-dom";
import search from "../public/search.svg";
import filter from "../public/filter.svg";
import ColorTabs from '../src/components/tabs';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[3px] px-4 flex gap-1">
        <div className="bg-[#1c1c1c] w-[460px] ml-[40px] rounded-2 h-[91vh] pt-2 pr-6 flex flex-col justify-between">
          <div>
            <div className="border-[#2a2a2a] border-[2px] p-2 w-[420px] rounded bg-transparent px-4 mx-4 my-2 flex justify-between items-center">
              {/* Left: Search Icon + Input */}
              <div className="flex items-center gap-2">
                <img
                  src={search}
                  className="w-4 h-4"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(15%) sepia(2%) saturate(640%) hue-rotate(163deg) brightness(96%) contrast(91%)",
                  }}
                  alt="Search"
                />
                <input
                  type="text"
                  placeholder="Search eg:infy base,index fund,etc"
                  className="text-white text-[12px] border-none bg-transparent focus:outline-none placeholder-gray-400 w-[160px]"
                />
              </div>

              {/* Right: Ctrl+K and Filter Icon */}
              <div className="flex items-center gap-3">
                <p className="bg-black border border-[#2a2a2a] text-white px-[6px] py-[3px] text-[12px] rounded">
                  Ctrl+K
                </p>
                <img src={filter} className="w-5 h-5" alt="Filter" />
              </div>
            </div>

            <div className="flex justify-between mb-2">
              <p className="text-gray-400 pl-4 text-[12px]">Watchlist 1 (7/250)</p>
              <p className="text-[#3271a5] text-[12px] cursor-pointer">+ New Group</p>
            </div>
            <CustomizedTables />
          </div>

          {/* Tabs pushed to the bottom */}
          <div className="mt-auto">
            <ColorTabs />
          </div>
        </div>

        <div className="bg-[#1c1c1c] w-[950px] rounded-2 h-[91vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
