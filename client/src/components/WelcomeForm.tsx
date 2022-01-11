import { Loader } from '.';
import { Input } from './Input';

export const WelcomeForm = () => {
  const handleSubmit = () => {};

  return (
    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        handleChange={console.log}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={console.log}
      />
      <Input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        handleChange={console.log}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        handleChange={console.log}
      />

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {false ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send Now
        </button>
      )}
    </div>
  );
};
