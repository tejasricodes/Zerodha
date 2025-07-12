import Topnav from '../../components/topnav';
import search from './images/search.svg'; // adjust path as per your folder structure

export default function Bids() {
  const tabItems = [
    { label: 'IPO', value: 'ipo' },
    { label: 'Govt.securities', value: 'govtsecurities' },
    { label: 'Auctions', value: 'auctions' },
  ];

  const ipoData = [
    { name: 'IGCL', desc: 'Indogulf Cropsciences', date: '26ᵗʰ — 30ᵗʰ Jun', price: '105 - 111', amount: '14985', qty: '135 Qty.', status: 'apply' },
    { name: 'PROFX', desc: 'Pro FX Tech', date: '26ᵗʰ — 30ᵗʰ Jun', price: '82 - 87', amount: '139200', qty: '1600 Qty.', status: 'apply' },
    { name: 'ACEALPHA', desc: 'Ace Alpha Tech', date: '26ᵗʰ — 30ᵗʰ Jun', price: '65 - 69', amount: '138000', qty: '2000 Qty.', status: 'apply' },
    { name: 'VALINDIA', desc: 'Valencia India', date: '26ᵗʰ — 30ᵗʰ Jun', price: '95 - 110', amount: '132000', qty: '1200 Qty.', status: 'apply' },
    { name: 'MMEL', desc: 'Moving Media Entertainment', date: '26ᵗʰ — 30ᵗʰ Jun', price: '66 - 70', amount: '140000', qty: '2000 Qty.', status: 'apply' },
    { name: 'ADCOUNTY', desc: 'Adcounty Media India', date: '27ᵗʰ Jun — 1ˢᵗ Jul', price: '80 - 85', amount: '136000', qty: '1600 Qty.', status: 'apply' },
    { name: 'NEETUYOSHI', desc: 'Neetu Yoshi', date: '27ᵗʰ Jun — 1ˢᵗ Jul', price: '71 - 75', amount: '120000', qty: '1600 Qty.', status: 'apply' },
    { name: 'OSWALPUMPS', desc: 'Oswal Pumps', date: '13ᵗʰ — 17ᵗʰ Jun', price: '584 - 614', amount: '14736', qty: '24 Qty.', status: 'closed' },
    { name: 'ARISINFRA', desc: 'Arisinfra Solutions', date: '18ᵗʰ — 20ᵗʰ Jun', price: '210 - 222', amount: '14874', qty: '67 Qty.', status: 'closed' },
    { name: 'GLOBECIVIL', desc: 'Globe Civil Projects', date: '24ᵗʰ — 26ᵗʰ Jun', price: '67 - 71', amount: '14981', qty: '211 Qty.', status: 'closed' },
  ];

  return (
     <div className="px-4">
      <Topnav tabLabels={tabItems} defaultValue="ipo" />
      <div className="px-4 pt-2">
        {/* IPO Heading + Search */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-white text-[20px] font-medium py-2">IPOs ({ipoData.length})</h2>
          <div className="relative text-white text-sm">
            <span className="absolute left-3 top-2.5">
              <img src={search} alt="search" className="w-3.5 h-3.5 opacity-70" />
            </span>
          <input
  type="text"
  placeholder="Search"
  className="bg-[#1c1c1c] text-white text-sm pl-9 pr-3 py-1 rounded placeholder-gray-400 w-44 border focus:outline-none"
  style={{
    border: '1px solid #2a2a2a',
  }}
  onFocus={(e) => (e.target.style.border = '1px solid #2a2a2a')}
  onBlur={(e) => (e.target.style.border = '1px solid #2a2a2a')}
/>

          </div>
        </div>

        {/* Table */}
        <table className="w-full text-xs text-white">
         <thead>
  <tr
    className="text-gray-400 text-left border-y "
    style={{ borderColor: '#2a2a2a' }}
  >
    <th className="py-4">Instrument</th>
    <th className="py-4">Date</th>
    <th className="py-4 border-r" style={{ borderColor: '#2a2a2a' }}>Price (₹)</th>
    <th className="py-4 pl-7">Min. amount (₹)</th>
    <th></th>
  </tr>
</thead>

          <tbody>
            {ipoData.map((ipo, idx) => (
              <tr
                key={idx}
                className="border-b"
                style={{ borderColor: '#2a2a2a' }}
              >
                <td className="py-2">
                  <div className="font-medium">{ipo.name} <span className="text-blue-500 text-[10px] ml-1">SME</span></div>
                  <div className="text-gray-400 text-xs">{ipo.desc}</div>
                </td>
                <td>{ipo.date}</td>
                <td className="border-r pr-2" style={{ borderColor: '#2a2a2a' }}>{ipo.price}</td>
                <td className="pl-2 ">
                  <div className='mx-10'>{ipo.amount}</div>
                  <div className="text-gray-400 text-xs mx-10">{ipo.qty}</div>
                </td>
                <td>
                  {ipo.status === 'apply' ? (
                    <button className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded cursor-pointer">Apply</button>
                  ) : (
                    <button className="bg-[#2a2a2a] text-gray-500 text-xs font-medium px-3 py-1 rounded cursor-not-allowed" disabled>Closed</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
  );
}
