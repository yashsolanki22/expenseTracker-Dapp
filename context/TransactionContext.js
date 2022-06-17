import { createContext, useEffect, useRef, useState } from 'react'
import Web3Modal from "web3modal"
import { providers, Contract } from 'ethers'
import { EXPENSETRACKER_CONTRACT_ADDRESS, abi } from '../constants/index';

export const TransactionContext = createContext();


export const TransactionProvider = ({ children }) =>{

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  const [loading, setLoading] = useState(false);
  const [allExpenses, setAllExpenses] = useState([])

  console.log(allExpenses)
  const getProviderOrSigner = async (needSigner = false)=>{
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if(chainId !==5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change the network to Goerli");
    }

    if(needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  }

  // add trasaction to expense list
  const addTransaction = async () =>{
    try {
      const signer = await getProviderOrSigner(true);
      const expenseTrackerContract = new Contract(
        EXPENSETRACKER_CONTRACT_ADDRESS,
        abi,
        signer
      );

      const addExpense = await expenseTrackerContract.addTransaction(text, amount);
      setLoading(true);
      // console.log("loading....", addExpense)
      await addExpense.wait();
      setLoading(false);
      getExpenses();
      setText("");
      setAmount(0)

    } catch(err) {
      console.error(err);
    }
  }

  // get transactions from the expense list
  const getExpenses = async () => {
    try {
      const provider = await getProviderOrSigner();
      const expenseTrackerContract = new Contract(
        EXPENSETRACKER_CONTRACT_ADDRESS,
        abi,
        provider
      );

      const transactionList = await expenseTrackerContract.getTransactions();
      
      const allTransaction = transactionList.map((transaction)=> ({
        text: transaction.text,
        amount: parseInt(transaction.amount._hex)
      }));
      setAllExpenses(allTransaction)
      console.log(transactionList);
      
    } catch(err) {
      console.error(err);
    }
  }

  const deleteTransaction = async (index) =>{
    try {
      // console.log("deleted", index);
      const signer = await getProviderOrSigner(true);
      const expenseTrackerContract = new Contract(
        EXPENSETRACKER_CONTRACT_ADDRESS,
        abi,
        signer
      );
      const updatedTransactionList = await expenseTrackerContract.deleteTransaction(index);
      setLoading(true);
      await updatedTransactionList.wait();
      setLoading(false);
      getExpenses();
    } catch(err) {
      console.error(err);
    }
  }


  const connectWallet = async ()=>{
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
      getExpenses()
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    if(!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  },[walletConnected])

  return (
    <TransactionContext.Provider value={{ connectWallet, text, setText, amount, setAmount, addTransaction, getExpenses, allExpenses, deleteTransaction }}>
      { children }
    </TransactionContext.Provider>
  )
} 