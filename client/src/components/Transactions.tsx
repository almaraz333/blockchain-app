import { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';
import { TransactionCard } from './TransactionCard';

export const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  console.log(transactions);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h3 className="text-white text-3xl text-center my-2">
          {currentAccount
            ? 'Latest Transactions'
            : 'Connect your account to see the latest transactions'}
        </h3>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((item, key) => (
            <TransactionCard key={key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
