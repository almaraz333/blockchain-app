const commonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

export const WelcomeGrid = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
      <div className={`rounded-tl-2xl ${commonStyles}`}>Reliable</div>
      <div className={commonStyles}>Secure</div>
      <div className={`sm:rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
      <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
      <div className={commonStyles}>Low Fees</div>
      <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
    </div>
  );
};
