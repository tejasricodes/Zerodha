import upi from "./images/upi_logo.png";
import commodity from './images/commodity.svg'
import equity from './images/equity.svg'
import view from './images/view.svg'

export default function Funds() {
  const data = [
    {
      heading: "Available Margin",
      value1: 450.4,
      value2: "0.00",
    },
    {
      heading: "Used margin",
      value1: '0.00',
      value2: " 0.00",
    },
    {
      heading: "Available cash",
      value1: 450.4,
      value2: "0.00",
    },
  ];

  const data1 = [
    {
      heading: "Opening balance",
      value1: "450.40",
      value2: "0.00",
    },
    {
      heading: "Payin",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Payout",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Span",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Delivary margin",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Exposure",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Options premium",
      value1: "0.00",
      value2: "0.00",
    },
  ];

  const data2 = [
    {
      heading: "Collateral (Liquid funds)",
      value1: "450.40",
    },
    {
      heading: "Collateral (Equity)",
      value1: "0.00",
    },
    {
      heading: "Total collateral",
      value1: "0.00",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="flex p-4 justify-end items-center">
        <p className="text-[12px] text-gray-400">
          Instant, zero-cost fund transfers with
        </p>
        <img src={upi} className="w-11 h-5 mr-4 ml-2" alt="UPI" />
        <button className="bg-green-400 border-green-400 p-2 rounded-[4px] text-white font-semibold mr-2 px-5 cursor-pointer">
          Add funds
        </button>
        <button className="bg-blue-400 border-blue-400 p-2 rounded-[4px] text-white font-semibold px-5 cursor-pointer">
          Withdraw
        </button>
      </div>

      <div className="flex m-4 gap-8">
        <div className="flex justify-between w-1/2">
          <p className="flex gap-3 items-center text-white"><span><img src={equity} className="h-4 w-4"></img></span>Equity</p>
          <div className="justify-end flex gap-2">
            <p className="flex gap-2 items-center text-blue-500 text-[12px] cursor-pointer"><span><img src={view} className="h-3 w-3"></img></span>View statement</p>
            <p className="flex  items-center text-blue-500 text-[12px] cursor-pointer">Help</p>
          </div>
        </div>
        <div className="flex justify-between w-1/2 ">
          <p className="flex gap-3 items-center text-white"><span><img src={commodity} className="h-4 w-4"></img></span>Commodity</p>
          <div className="justify-end flex gap-2 items-center">
            <p className="flex gap-2 items-center text-blue-500 text-[12px] cursor-pointer"><span><img src={view} className="h-3 w-3"></img></span>View statement</p>
            <p className="flex  items-center text-blue-500 text-[12px] cursor-pointer">Help</p>
          </div>
        </div>
      </div>

      {/* Columns Section */}
      <div className="flex gap-8 px-4">
        {/* Column 1 */}

        <div className="flex flex-col gap-4 w-1/2 border border-[#2a2a2a] p-4 rounded">
          {data.map((copyofdata, index) => (
  <div key={index} className="flex justify-between w-full items-center">
    <p className="text-gray-400 text-[12px]">{copyofdata.heading}</p>
    <p
      className={`text-[20px] ${
        index === 0 ? "text-blue-500" : "text-white"
      }`}
    >
      {copyofdata.value1}
    </p>
  </div>
))}

          <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

          {data1.map((copyofdata1, index) => (
            <div key={index} className="flex justify-between w-full">
              <p className="text-gray-400 text-[12px]">{copyofdata1.heading}</p>
              <p className="text-white text-[12px]">{copyofdata1.value1}</p>
            </div>
          ))}
          <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

          {data2.map((copyofdata2, index) => (
            <div key={index} className="flex justify-between w-full">
              <p className="text-gray-400 text-[12px]">{copyofdata2.heading}</p>
              <p className="text-white text-[12px]">{copyofdata2.value1}</p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-1/2 border border-[#2a2a2a] p-4 rounded">
          {data.map((copyofdata, index) => (
            <div key={index} className="flex justify-between w-full items-center">
              <p className="text-gray-400 text-[12px]">{copyofdata.heading}</p>
              <p className="text-white text-[20px]">{copyofdata.value2}</p>
            </div>
          ))}

          <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

          {data1.map((copyofdata1, index) => (
            <div key={index} className="flex justify-between w-full">
              <p className="text-gray-400 text-[12px]">{copyofdata1.heading}</p>
              <p className="text-white text-[12px]">{copyofdata1.value2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
