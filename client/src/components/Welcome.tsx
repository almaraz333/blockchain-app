import { useContext } from 'react';

import { EthCard } from './EthCard';
import { WelcomeGrid } from './WelcomeGrid';
import { TransactionContext } from '../context/TransactionContext';

export const Welcome = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white  py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="test-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="text-white text-base font-semibold flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              Connect Wallet
            </button>
          )}
          <WelcomeGrid />
        </div>
        <EthCard />
      </div>
    </div>
  );
};
