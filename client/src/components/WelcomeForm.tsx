import { useContext } from 'react';
import { Loader } from '.';
import { TransactionContext } from '../context/TransactionContext';
import { Input } from './Input';

export const WelcomeForm = () => {
  const { formData, handleChange, sendTransaction, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = () => {
    const { addressTo, amount, keyword, message } = formData;

    // e.preventDefault();

    if (!addressTo || !amount || !keyword || !message || !sendTransaction)
      return;

    sendTransaction();
  };

  if (!handleChange) return <></>;

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        handleChange={(e) => handleChange(e, 'addressTo')}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={(e) => handleChange(e, 'amount')}
      />
      <Input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        handleChange={(e) => handleChange(e, 'keyword')}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        handleChange={(e) => handleChange(e, 'message')}
      />

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="submit"
          onClick={(e) => handleSubmit()}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send Now
        </button>
      )}
    </div>
  );
};
