import Topnav from "../../components/topnav";
import view from "./images/view.svg";
import download from "./images/download.svg";
import family from "./images/family.svg";
import search from "./images/search.svg";
import { ChevronDown } from "lucide-react";

const data = [
  {
    instrument: "ADANIENT",
    qty: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    curVal: 52967.0,
    pnl: 9010.25,
    netChg: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    instrument: "ADANIGREEN",
    qty: 21,
    avgCost: 946.97,
    ltp: 1015.75,
    invested: 19886.45,
    curVal: 21330.75,
    pnl: 1444.3,
    netChg: "+7.26%",
    dayChg: "+2.38%",
  },
  {
    instrument: "ADANIPORTS",
    qty: 12,
    avgCost: 1125.83,
    ltp: 1440.0,
    invested: 13509.9,
    curVal: 17280.0,
    pnl: 3770.1,
    netChg: "+27.91%",
    dayChg: "+0.75%",
  },
  {
    instrument: "ADANIPOWER",
    qty: 100,
    avgCost: 492.9,
    ltp: 584.25,
    invested: 49290.0,
    curVal: 58425.0,
    pnl: 9135.0,
    netChg: "+18.53%",
    dayChg: "+1.06%",
  },
  {
    instrument: "AURIONPRO",
    qty: 1,
    avgCost: 1385.65,
    ltp: 1441.95,
    invested: 1385.65,
    curVal: 1441.95,
    pnl: 56.3,
    netChg: "+4.06%",
    dayChg: "+2.88%",
  },
  {
    instrument: "BAJAJELEC",
    qty: 50,
    avgCost: 624.6,
    ltp: 685.45,
    invested: 31229.8,
    curVal: 34272.5,
    pnl: 3042.7,
    netChg: "+9.74%",
    dayChg: "+0.93%",
  },
  {
    instrument: "BFUTILITIE",
    qty: 2,
    avgCost: 759.3,
    ltp: 780.45,
    invested: 1518.6,
    curVal: 1560.9,
    pnl: 42.3,
    netChg: "+2.79%",
    dayChg: "-0.37%",
  },
  {
    instrument: "CRISIL",
    qty: 3,
    avgCost: 4274.53,
    ltp: 6049.5,
    invested: 12823.6,
    curVal: 18148.5,
    pnl: 5324.9,
    netChg: "+41.52%",
    dayChg: "+1.72%",
  },
  {
    instrument: "DRREDDY",
    qty: 3,
    avgCost: 1247.1,
    ltp: 1303.0,
    invested: 3741.3,
    curVal: 3909.0,
    pnl: 167.7,
    netChg: "+4.48%",
    dayChg: "-1.38%",
  },
  {
    instrument: "GPIL",
    qty: 50,
    avgCost: 182.19,
    ltp: 190.0,
    invested: 9109.5,
    curVal: 9500.0,
    pnl: 390.5,
    netChg: "+4.29%",
    dayChg: "+0.68%",
  },
  {
    instrument: "GREENPOWER",
    qty: 600,
    avgCost: 12.83,
    ltp: 14.16,
    invested: 7698.0,
    curVal: 8496.0,
    pnl: 798.0,
    netChg: "+10.37%",
    dayChg: "-0.21%",
  },
  {
    instrument: "HAPPSTMNDS",
    qty: 1,
    avgCost: 536.7,
    ltp: 649.7,
    invested: 536.7,
    curVal: 649.7,
    pnl: 113.0,
    netChg: "+21.05%",
    dayChg: "+0.53%",
  },
  {
    instrument: "HAVELLS",
    qty: 10,
    avgCost: 1579.6,
    ltp: 1568.4,
    invested: 15796.0,
    curVal: 15684.0,
    pnl: -112.0,
    netChg: "-0.71%",
    dayChg: "-0.83%",
  },
];

const formatNumber = (num) =>
  num.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function HoldingsTable() {
  const tabItems = [
    { label: "All", value: "all" },
    { label: "Equity", value: "equity" },
    { label: "Mutual Funds", value: "mutualfunds" },
  ];

  return (
    <div className="px-4">
      <Topnav tabLabels={tabItems} defaultValue="all" />
      {/* Heading section */}
      <div className="flex justify-between pt-4 pb-2">
        <div className="flex gap-2">
          <h2
            style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}
          >
            Holdings (26)
          </h2>
        <div className="relative text-white text-sm ">
  <select
    className="bg-[#1c1c1c] text-white text-sm pl-3 pr-8 py-1 rounded w-32 appearance-none border focus:outline-none cursor-pointer"
    style={{ border: '1px solid #2a2a2a' }}
  >
    <option>Equity</option>
    <option>Debt</option>
    <option>Mutual Fund</option>
    <option>Commodity</option>
  </select>
  <span className="absolute right-2 top-2.5 pointer-events-none">
    <ChevronDown size={14} className="text-gray-400" />
  </span>
</div>
        </div>

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

      <hr className="mx-2 w-full max-w-[920px] border-t border-[#2a2a2a]" />

      {/* Summary */}
      <div className="flex gap-30 mb-5 text-sm my-4 mx-4">
        <div>
          <div className="text-gray-500">Total investment</div>
          <div>
            <strong className="text-[20px] text-white">
              3,96,851<span className="text-[12px]">.20</span>
            </strong>
          </div>
        </div>
        <div>
          <div className="text-gray-500">Current value</div>
          <div>
            <strong className="text-[20px] text-white">
              4,51,805<span className="text-[12px]">.75</span>
            </strong>
          </div>
        </div>
        <div>
          <div className="text-gray-500">Day's P&L</div>
          <div style={{ color: "green" }}>
            <strong className="text-[20px]">
              3,230<span className="text-[12px]">.35 </span>
            </strong>
            <span className="bg-green-500/10 text-green-500 text-[12px] px-2 py-[2px] rounded-sm border border-green-300/20 backdrop-blur-[2px]">
              +0.72%
            </span>
          </div>
        </div>
        <div>
          <div className="text-gray-500">Total P&L</div>
          <div style={{ color: "green" }}>
            <strong className="text-[20px]">
              54,954<span className="text-[12px]">.55 </span>
            </strong>{" "}
            <span className="bg-green-500/10 text-green-500 text-[12px] px-2 py-[2px] rounded-sm border border-green-300/20 backdrop-blur-[2px]">
              +13.85%
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "11px",
          color: "white",
        }}
      >
        <thead style={{ borderTop: "2px solid #2a2a2a" }}>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #2a2a2a" }}>
            <th style={{ padding: "8px", borderRight: "1px solid #2a2a2a" }}>
              Instrument
            </th>
            <th style={{ padding: "8px" }}>Qty.</th>
            <th style={{ padding: "8px" }}>Avg. cost</th>
            <th style={{ padding: "8px", borderRight: "1px solid #2a2a2a" }}>
              LTP
            </th>
            <th style={{ padding: "8px" }}>Invested</th>
            <th style={{ padding: "8px" }}>Cur. val</th>
            <th style={{ padding: "8px" }}>P&L</th>
            <th style={{ padding: "8px" }}>Net chg.</th>
            <th style={{ padding: "8px" }}>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #2a2a2a" }}>
              <td style={{ padding: "8px", borderRight: "1px solid #2a2a2a" }}>
                {row.instrument}
              </td>
              <td style={{ padding: "8px" }}>{row.qty}</td>
              <td style={{ padding: "8px" }}>{formatNumber(row.avgCost)}</td>
              <td style={{ padding: "8px", borderRight: "1px solid #2a2a2a" }}>
                {formatNumber(row.ltp)}
              </td>
              <td style={{ padding: "8px" }}>{formatNumber(row.invested)}</td>
              <td style={{ padding: "8px" }}>{formatNumber(row.curVal)}</td>
              <td
                style={{
                  padding: "8px",
                  color: row.pnl >= 0 ? "green" : "red",
                }}
              >
                {formatNumber(row.pnl)}
              </td>
              <td
                style={{
                  padding: "8px",
                  color: row.netChg.startsWith("+") ? "green" : "red",
                }}
              >
                {row.netChg}
              </td>
              <td
                style={{
                  padding: "8px",
                  color: row.dayChg.startsWith("+") ? "green" : "red",
                }}
              >
                {row.dayChg}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
