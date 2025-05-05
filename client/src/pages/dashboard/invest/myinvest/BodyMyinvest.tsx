import { useState } from 'react';

const payment = [
    { plan: 'standard', return: '3 X 30', received: '90', payment: '30', status: 'completed' },
    { plan: 'prime', return: '6 X 3000', received: '18000', payment: '30000', status: 'completed' },
    { plan: 'institutional', return: '3 X 60', received: '90', payment: '30', status: 'completed' },
    { plan: 'prime', return: '6 X 3000', received: '18000', payment: '30000', status: 'completed' },
    { plan: 'standard', return: '3 X 30', received: '90', payment: '30', status: 'completed' },
    { plan: 'prime', return: '6 X 3000', received: '18000', payment: '30000', status: 'completed' },
    { plan: 'standard', return: '3 X 30', received: '90', payment: '30', status: 'completed' },
    { plan: 'prime', return: '6 X 3000', received: '18000', payment: '30000', status: 'completed' },
    { plan: 'standard', return: '3 X 30', received: '90', payment: '30', status: 'completed' },
    { plan: 'prime', return: '6 X 3000', received: '18000', payment: '30000', status: 'completed' },
    { plan: 'standard', return: '3 X 30', received: '90', payment: '30', status: 'completed' },
    { plan: 'prime', return: '6 X 3000', received: '18000', payment: '30000', status: 'completed' },
];

interface TransCard {
    plan: string;
   return: string;
    received: string;
    payment: string;
    status: string;
}


const BodyMyinvest = () => {
     const [currentPage, setCurrentPage] = useState(1);
      const [selectedTransaction, setSelectedTransaction] = useState<TransCard|null>(null);
      const transactionsPerPage = window.innerWidth < 768 ? 3 : 10;
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
          <div className='my-2 px-2'>
              {/* Table View for Large Screens */}
              <div className='w-full overflow-auto hidden md:block'>
                  <table className='w-full min-w-[60rem] bg-[var(--card-color)] rounded-lg p-4'>
                      <thead className='border-b-2 bg-[var(--secondary-color)]'>
                          <tr>
                              <th className='px-4 py-2 text-[var(--text-white)] text-left'>Plan</th>
                              <th className='px-4 py-2 text-[var(--text-white)] text-left'>Amount</th>
                              <th className='px-4 py-2 text-[var(--text-white)] text-left'>Return</th>
                              <th className='px-4 py-2 text-[var(--text-white)] text-left'>Received</th>
                              <th className='px-4 py-2 text-[var(--text-white)] text-left'>Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          {currentTransactions.map(transaction => (
                              <tr key={transaction.plan} className='border-b text-left'>
                                  <td className='px-4 py-4'>{transaction.plan}</td>
                                  <td className='px-4 py-4'>${transaction.payment}</td>
                                  <td className='px-4 py-4'>${transaction.return}</td>
                                  <td className='px-4 py-4'>${transaction.received}</td>
                                  <td className='flex text-center m-4 items-center justify-center w-[6rem] rounded-lg text-[var(--text-white)] bg-[var(--success-color)]'>{transaction.status}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              
              {/* Card View for Small Screens */}
              <div className='block md:hidden mr-16'>
                  {currentTransactions.map(transaction => (
                      <div key={transaction.plan} 
                      onClick={() => {
                          console.log(transaction); // Debugging
                          setSelectedTransaction(transaction);
                      }}
                      className='bg-[var(--light-gray)] p-4 mb-4 rounded-lg shadow cursor-pointer'
                  >
                  
                         <div className='flex items-center'>
                         <p><strong>Plan:</strong> {transaction.plan}</p>
                         <p><strong>Amount:</strong> ${transaction .payment}</p>
                          </div> 
                          <div className='flex items-center'>
                          <p><strong>Return:</strong> ${transaction.return}</p>
                          <p><strong>Received:</strong> ${transaction.received}</p>
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
                  <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 '>
                      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                          <h2 className='text-lg font-bold mb-4'>Transaction Details</h2>
                          <p><strong>Plan:</strong> {selectedTransaction.plan}</p>
                          <p><strong>Amount:</strong> ${selectedTransaction .payment}</p>
                          <p><strong>Return:</strong> {selectedTransaction.return}</p>
                          <p><strong>Recieved:</strong> {selectedTransaction.received}</p>
                          <p><strong>Status:</strong> {selectedTransaction.status}</p>
                          <button className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md' onClick={() => setSelectedTransaction(null)}>Close</button>
                      </div>
                  </div>
              )}
              </div>
          </div>
      );
}

export default BodyMyinvest