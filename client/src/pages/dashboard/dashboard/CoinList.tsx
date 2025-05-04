import { GoDotFill } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";

interface ChartProps {
  color: string;
  key?: number;
  label: string;
  title?: string | number;
  [key: string]: any;
}

const data = [
  { title: 'Standard', value: 10, color: '#E38627' },
  { title: 'Institutional', value: 15, color: '#C13C37' },
  { title: 'Shareholder', value: 20, color: '#6A2135' },
  { title: 'Prime', value: 13, color: '#FFC700' },
];

const CoinList = () => {
  const StatCard = ({ color, label, amount, percentage }:ChartProps) => (
    <div className='bg-[var(--card-color)] items-center shadow-sm p-2 '>
      <p className='flex items-center text-sm'>
        <GoDotFill color={color} />
        <span className='text-[var(--gray-color)] ml-1'>{label}</span>
      </p>
      <h2 className='font-bold text-md'>{amount}</h2>
      <p className='flex items-center text-sm font-semibold'>
        <IoMdArrowDropup color='#016119' />
        <span className='text-[var(--success-color)] ml-1 '>{percentage}</span>
      </p>
    </div>
  );


  return (
     <div className='grid grid-cols-4 gap-4'>
      {data.map((item, index) => (
        <StatCard 
          key={index} 
          color={item.color} 
          label={item.title} 
          amount="$165.52K" 
          percentage="25.20%" 
        />
      ))}
    </div>
  )
}

export default CoinList