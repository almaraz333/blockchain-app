import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { shortenAddress } from '../utils/shortenAddress';

export type TransactionCardProps = {
  id: number;
  url: string;
  message: string;
  timestamp: string;
  addressFrom: string;
  amount: string;
  addressTo: string;
  keyword?: string;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url
}) => {
  console.log(addressTo);
  const gifData = useFetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${
      process.env.REACT_APP_GIPHY_API
    }&q=${keyword?.split(' ').join('')}&limit=1`
  );

  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
  2xl:min-w[450px]
  2xl:max-w[500px]
  sm:min-w[270px]
  sm:max-w[300px]
  flex-col p-3 rounded-md hover:shadow-2xl
  "
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom ?? ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom ?? '')}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo ?? ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(addressTo ?? '')}
            </p>
          </a>
          <p className="text-white text-base">Amount: {amount} Eth</p>

          {message && (
            <>
              <br /> <p className="text-white text-base">Message: {message}</p>
            </>
          )}
          <br />
          <p className="text-white font-bold">{timestamp}</p>
        </div>
        <img
          src={
            keyword && gifData
              ? gifData?.data[0]?.images?.downsized_medium?.url
              : url
          }
          alt="gif"
          className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
