

import { PieChart } from 'react-minimal-pie-chart';
import { GoDotFill } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";
import GeckoCoinList from './CoinList';


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

const totalValue = data.reduce((acc, item) => acc + item.value, 0);


const StatCard = ({ color, label, amount, percentage }:ChartProps) => (
  <div className='bg-[var(--card-color)] shadow-sm p-2 '>
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

const Card = () => (
  <div className='bg-[var(--card-color)] rounded-lg p-8 w-full'>
    <h2 className='text-lg font-bold  pb-6'>Investment Categories</h2>
  <div className='flex flex-col md:flex-row gap-6 '>
    <div className='relative max-w-[40rem] h-[10rem] mx-auto'>
      <PieChart data={data} radius={50} lineWidth={30} rounded />
      <div className='absolute inset-0 flex items-center justify-center text-xl font-bold'>
       <div className='grid justify-center items-center'>
       <p>Total</p>
       <p>{totalValue}K</p>
       </div>

      </div>
    </div>
    <div className='grid grid-cols-2 gap-4'>
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
  </div>
  </div>
);

const BodyDash = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Card />
        <GeckoCoinList/>
      </div>
    </div>
  );
};

export default BodyDash;

