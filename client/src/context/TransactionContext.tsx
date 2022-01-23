import { useEffect, useState, createContext } from 'react';
import { ethers } from 'ethers';

import { contractAbi, contractAddress } from '../utils/constants';

export type TransactionContextProps = {
  connectWallet?: () => void;
  currentAccount?: string;
  formData: FormDataProps;
  setFormData?: (formData: FormDataProps) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  sendTransaction?: () => void;
  transactions: {
    addressTo: string;
    addressFrom: string;
    timestamp: string;
    message: string;
    keyword: string;
    amount: string;
    id: number;
    url: string;
  }[];
  isLoading?: boolean;
};

type FormDataProps = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

export const TransactionContext = createContext<TransactionContextProps>({
  formData: {
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  },
  transactions: []
});

const { ethereum } = window as unknown as Window & { ethereum: any };

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

export const TransactionProvider: React.FC = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const [, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  );
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState<FormDataProps>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');

      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();

      const formattedTransactions = availableTransactions.map((txn: any) => ({
        addressTo: txn.receiver,
        addressFrom: txn.sender,
        timestamp: new Date(txn.timestamp.toNumber() * 1000).toLocaleString(),
        message: txn.message,
        keyword: txn.keyword,
        amount: parseInt(txn.amount._hex) / 10 ** 18
      }));

      setTransactions(formattedTransactions);
    } catch (error) {
      console.log(error);
      throw new Error('No Eth object');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error('No Eth object');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');

      const { addressTo, amount, keyword, message } = formData;

      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208',
            value: parsedAmount._hex
          }
        ]
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`loading ${transactionHash.hash}`);

      await transactionHash.wait();

      setIsLoading(false);
      console.log(`success ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());

      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error('No Eth object');
    }
  };

  useEffect(() => {
    const checkIfWalletConnected = async () => {
      try {
        if (!ethereum) return alert('Please install Metamask');

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length) {
          setCurrentAccount(accounts[0]);

          getAllTransactions();
        }
      } catch (error) {
        console.log(error);
        throw new Error('No Eth object');
      }
    };

    const checkIfTransactionsExits = async () => {
      try {
        const transactionContract = getEthereumContract();
        const transactionCount =
          await transactionContract.getTransactionCount();

        window.localStorage.setItem('transactionCount', transactionCount);
      } catch (error) {
        console.log(error);

        throw new Error('No Eth object');
      }
    };

    checkIfWalletConnected();
    checkIfTransactionsExits();
  }, [currentAccount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
