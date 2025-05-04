import { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const payment = [
    { serialId: 'CDYTMNA', amount: '4000', package: 'standard', date: '11/03/2025', wallet: 'BTC', method: 'Bitcoin', status: 'pending' },
    { serialId: 'CDYTMNB', amount: '4500', package: 'premium', date: '12/03/2025', wallet: 'ETH', method: 'Ethereum', status: 'completed' },
    { serialId: 'CDYTMNC', amount: '3000', package: 'basic', date: '13/03/2025', wallet: 'USDT', method: 'Tether', status: 'failed' },
    { serialId: 'CDYTMND', amount: '5000', package: 'gold', date: '14/03/2025', wallet: 'BTC', method: 'Bitcoin', status: 'pending' },
    { serialId: 'CDYTMNE', amount: '3500', package: 'standard', date: '15/03/2025', wallet: 'ETH', method: 'Ethereum', status: 'completed' },
    { serialId: 'CDYTMNF', amount: '6000', package: 'vip', date: '16/03/2025', wallet: 'BTC', method: 'Bitcoin', status: 'pending' },
    { serialId: 'CDYTMNG', amount: '2800', package: 'basic', date: '17/03/2025', wallet: 'USDT', method: 'Tether', status: 'failed' },
    { serialId: 'CDYTMNH', amount: '4200', package: 'standard', date: '18/03/2025', wallet: 'ETH', method: 'Ethereum', status: 'completed' },
    { serialId: 'CDYTMNI', amount: '5200', package: 'gold', date: '19/03/2025', wallet: 'BTC', method: 'Bitcoin', status: 'pending' },
    { serialId: 'CDYTMNJ', amount: '7000', package: 'vip', date: '20/03/2025', wallet: 'ETH', method: 'Ethereum', status: 'completed' },
    { serialId: 'CDYTMNK', amount: '7500', package: 'vip', date: '21/03/2025', wallet: 'BTC', method: 'Bitcoin', status: 'pending' }
];

interface TransCard {
    serialId: string;
    amount: string;
    package: string;
    date: string;
    wallet: string;
    method: string;
    status: string;
}

const TransSide = () => {
    const [selectedTransaction, setSelectedTransaction] = useState<TransCard | null>(null);

    const currentTransactions = payment.slice(0,6);

    return (
        <div className='my-8 px-2 flex justify-center'>
            <div className='bg-[var(--card-color)] rounded-lg p-8 w-full max-w-4xl'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-md font-bold pb-6'>Latest Transaction</h2>
                    <p className='bg-[var(--primary-color)] rounded-md p-2 text-[var(--text-white)]'>
                        <IoIosArrowRoundForward size={20} />
                    </p>
                </div>
                <div className='overflow-x-auto mt-6'>
                    <table className='min-w-full table-auto text-center'>
                        <thead className=''>
                            <tr>
                                <th className='px-4 py-2 text-[var(--text-black)] font-bold'>Serial ID</th>
                                <th className='px-4 py-2 text-[var(--text-black)] font-bold'>Amount</th>
                                <th className='px-4 py-2 text-[var(--text-black)] font-bold'>Package</th>
                                <th className='px-4 py-2 text-[var(--text-black)] font-bold'>Status</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {currentTransactions.map((transaction) => (
                                <tr key={transaction.serialId} className='border-b border-[var(--light-gray)]'>
                                    <td className='px-4 py-2'>{transaction.serialId}</td>
                                    <td className='px-4 py-2'>${transaction.amount}</td>
                                    <td className='px-4 py-2'>{transaction.package}</td>
                                    <p className='px-4  text-[var(--success-color)] bg-[var(--primary-light)] text-center mt-2'>{transaction.status}</p>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransSide;
