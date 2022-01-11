import { AiFillAlipayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from '../components';
import { EthCard } from '../components/EthCard';
import { WelcomeGrid } from '../components/WelcomeGrid';

export const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="test-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="text-white text-base font-semibold flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Connect Wallet
          </button>
          <WelcomeGrid />
        </div>
        <EthCard />
      </div>
    </div>
  );
};
