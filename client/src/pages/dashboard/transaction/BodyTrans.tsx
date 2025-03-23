import { useState } from 'react';

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

const BodyTrans = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTransaction, setSelectedTransaction] = useState<TransCard|null>(null);
    const transactionsPerPage = window.innerWidth < 768 ? 5 : 10;
    const totalPages = Math.ceil(payment.length / transactionsPerPage);

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = payment.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const handlePageChange = (pageNumber:number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className='my-8 px-2'>
            {/* Table View for Large Screens */}
            <div className='w-full overflow-auto hidden md:block'>
                <table className='w-full min-w-[60rem] bg-[var(--card-color)] rounded-lg p-4'>
                    <thead className='border-b-2 bg-[var(--secondary-color)]'>
                        <tr>
                            <th className='px-4 py-2 text-[var(--text-white)] text-left'>Serial ID</th>
                            <th className='px-4 py-2 text-[var(--text-white)] text-left'>Amount</th>
                            <th className='px-4 py-2 text-[var(--text-white)] text-left'>Package</th>
                            <th className='px-4 py-2 text-[var(--text-white)] text-left'>Date</th>
                            <th className='px-4 py-2 text-[var(--text-white)] text-left'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map(transaction => (
                            <tr key={transaction.serialId} className='border-b text-left'>
                                <td className='px-4 py-4'>{transaction.serialId}</td>
                                <td className='px-4 py-4'>${transaction.amount}</td>
                                <td className='px-4 py-4'>{transaction.package}</td>
                                <td className='px-4 py-4'>{transaction.date}</td>
                                <td className='px-4 py-4 text-[var(--success-color)]'>{transaction.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Card View for Small Screens */}
            <div className='block md:hidden'>
                {currentTransactions.map(transaction => (
                    <div key={transaction.serialId} 
                    onClick={() => {
                        console.log(transaction); // Debugging
                        setSelectedTransaction(transaction);
                    }}
                    className='bg-[var(--light-gray)] p-4 mb-4 rounded-lg shadow cursor-pointer'
                >
                
                       <div className='flex items-center'>
                       <p><strong>Serial ID:</strong> {transaction.serialId}</p>
                       <p><strong>Amount:</strong> ${transaction.amount}</p>
                        </div> 
                        <div className='flex items-center'>
                        <p><strong>Package:</strong> {transaction.package}</p>
                        <p><strong>Date:</strong> {transaction.date}</p>
                        </div> 
                        
                        <p><strong>Status:</strong> <span className='text-[var(--success-color)]'>{transaction.status}</span></p>
                    </div>
                ))}
            </div>
            
            {/* Pagination */}
            <div className='flex flex-wrap justify-start mt-4 gap-2'>
                {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)} className='px-3 py-2 text-sm bg-gray-300 rounded-md'>
                        Previous
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)}
                        className={`px-2 py-1 text-sm ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        {index + 1}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)} className='px-3 py-2 text-sm bg-gray-300 rounded-md'>
                        Next
                    </button>
                )}

                {/* Modal for Transaction Details */}
            {selectedTransaction && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
                    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                        <h2 className='text-lg font-bold mb-4'>Transaction Details</h2>
                        <p><strong>Serial ID:</strong> {selectedTransaction.serialId}</p>
                        <p><strong>Amount:</strong> ${selectedTransaction.amount}</p>
                        <p><strong>Package:</strong> {selectedTransaction.package}</p>
                        <p><strong>Date:</strong> {selectedTransaction.date}</p>
                        <p><strong>Status:</strong> {selectedTransaction.status}</p>
                        <button className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md' onClick={() => setSelectedTransaction(null)}>Close</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default BodyTrans;
