import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import commodity from './images/commodity.svg'
import equity from './images/equity.svg'
import TinyLineChart from '../../components/TinyLineChart';
import RowRadioButtonsGroup from '../../components/radiobuttons'
import suitcase from './images/suitcase.svg'
import market from './images/market.svg'


const dummyMarketData = [
  { name: 'Mon', value: 18200 },
  { name: 'Tue', value: 18050 },
  { name: 'Wed', value: 18100 },
  { name: 'Thu', value: 18250 },
  { name: 'Fri', value: 18300 },
];

export default function Dashboard() {
  return (
    <>
      {/* Section 1 */}
      <p className="text-white text-[20px] md:text-[24px] px-4 pt-4 pb-2 md:px-8 md:pb-4">
        Hi, Tejasri
      </p>
      <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

      {/* Section 2: Equity + Commodity */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 gap-y-8 md:gap-x-10 pt-6 pb-6">
        {/* Equity Block */}
        <div>
          <p className="flex gap-3 items-center text-white"><img src={equity} className="h-4 w-4" />Equity</p>
          <p className="text-white text-[28px] md:text-[36px]">450.4</p>
          <p className="text-gray-400 text-[12px]">Margin available</p>
        </div>

        <div className="hidden md:block bg-[#2a2a2a] h-[70px] w-[1.5px] mt-6"></div>

        {/* Equity Details */}
        <div className="flex flex-col gap-1 pt-2 md:pt-8 md:mr-[40px]">
          <p className="text-[12px] text-gray-400">
            Margins used<span className="text-white mx-3">0</span>
          </p>
          <p className="text-[12px] text-gray-400">
            Opening balance<span className="text-white mx-3">450.4</span>
          </p>
          <p className="text-[12px] text-[#3271a5]">View Statement</p>
        </div>

        {/* Commodity Block */}
        <div>
          <p className="flex gap-3 items-center text-white"><img src={commodity} className="h-4 w-4" />Commodity</p>
          <p className="text-white text-[28px] md:text-[36px]">0</p>
          <p className="text-gray-400 text-[12px]">Margin available</p>
        </div>

        <div className="hidden md:block bg-[#2a2a2a] h-[70px] w-[1.5px] mt-6"></div>

        {/* Commodity Details */}
        <div className="flex flex-col gap-1 pt-2 md:pt-8 md:mr-24">
          <p className="text-[12px] text-gray-400">
            Margins used<span className="text-white mx-3">0</span>
          </p>
          <p className="text-[12px] text-gray-400">
            Opening balance<span className="text-white mx-3">450.4</span>
          </p>
          <p className="text-[12px] text-[#3271a5]">View Statement</p>
        </div>
      </div>

      {/* Section 3: Holdings */}
      <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />
      <div className="px-4 md:px-8 pt-4 text-white">
       <p className="text-white text-[18px] font-semibold flex items-center gap-2">
  <img src={suitcase} className="h-4 w-4" />
  Holdings (26)
</p>


        <div className='flex gap-50 '>
          <div>
        <p className="text-[28px] md:text-[36px] mt-2 text-green-500">54.95k <span className="text-sm text-green-500">(+13.85%)</span></p>
         <p className='text-[12px] text-gray-400'>P&L</p>
         </div>
         <div className="hidden md:block bg-[#2a2a2a] h-[70px] w-[1.5px] mt-6"></div> 

        <div className="flex-col mt-2 text-[14px] md:text-[16px] ">
          <p className='text-[12px] text-gray-400 py-3'>Current Value <span className="text-white pl-2">  4.52L</span></p>
          <p className='text-[12px] text-gray-400 py-3'>Investment <span className="text-white pl-2">  3.97L</span></p>
        </div>
        </div>

        

        {/* Bar chart style strip (simplified dummy colors) */}
    <div
  className="grid mt-4 overflow-hidden"
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(14, 1fr)',
    gridTemplateRows: '1fr 1fr',
    height: '35px', // Adjust as needed
    width: '80%',  // Or set fixed width like '350px'
  }}
>
  {/* Columns 1 to 5 (full-height blocks) */}
  <div className="bg-[#3f51b5] col-start-1 col-end-2 row-span-2" />
  <div className="bg-[#2196f3] col-start-2 col-end-3 row-span-2" />
  <div className="bg-[#00bcd4] col-start-3 col-end-4 row-span-2" />
  <div className="bg-[#9c27b0] col-start-4 col-end-5 row-span-2" />
  <div className="bg-[#4caf50] col-start-5 col-end-6 row-span-2" />

  {/* Columns 6 to 14 (each split into 2 colors) */}
  <div className="bg-[#8bc34a] col-start-6 col-end-7 row-start-1" />
  <div className="bg-[#cddc39] col-start-6 col-end-7 row-start-2" />

  <div className="bg-[#ffeb3b] col-start-7 col-end-8 row-start-1" />
  <div className="bg-[#ffc107] col-start-7 col-end-8 row-start-2" />

  <div className="bg-[#ff9800] col-start-8 col-end-9 row-start-1" />
  <div className="bg-[#ff5722] col-start-8 col-end-9 row-start-2" />

  <div className="bg-[#795548] col-start-9 col-end-10 row-start-1" />
  <div className="bg-[#9e9e9e] col-start-9 col-end-10 row-start-2" />

  <div className="bg-[#607d8b] col-start-10 col-end-11 row-start-1" />
  <div className="bg-[#00bcd4] col-start-10 col-end-11 row-start-2" />

  <div className="bg-[#3f51b5] col-start-11 col-end-12 row-start-1" />
  <div className="bg-[#2196f3] col-start-11 col-end-12 row-start-2" />

  <div className="bg-[#03a9f4] col-start-12 col-end-13 row-start-1" />
  <div className="bg-[#00bcd4] col-start-12 col-end-13 row-start-2" />

  <div className="bg-[#9c27b0] col-start-13 col-end-14 row-start-1" />
  <div className="bg-[#4caf50] col-start-13 col-end-14 row-start-2" />

  <div className="bg-[#8bc34a] col-start-14 col-end-[15] row-start-1" />
  <div className="bg-[#cddc39] col-start-14 col-end-[15] row-start-2" />
</div>




<div className='flex gap-90'>
   <p className="mt-2 text-sm text-gray-400">₹4,51,805.75</p>
  <RowRadioButtonsGroup/></div>
       
      </div>

      <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a] my-5" />

    {/* Section 4 + 5: Market Overview & Empty Positions side by side */}
<div className="px-4 md:px-8  text-white flex flex-col md:flex-row gap-6">

  {/* Market Overview */}
  <div className="rounded-xl  w-full md:w-1/2">
    <p className="text-white text-[18px] font-semibold flex items-center gap-2">
  <img src={market} className="h-5 w-5" />
  Market overview
</p>
    <TinyLineChart />
  </div>

  {/* Empty Positions */}
  <div className="rounded-xl flex flex-col justify-center items-center w-full md:w-1/2 py-6">
    <div className="text-3xl">⚓</div>
    <p className="text-gray-500 text-sm mt-2">You don't have any positions yet</p>
  </div>

</div>


    </>
  );
}
