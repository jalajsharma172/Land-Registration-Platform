import { useEffect, useState } from "react";
import { Web3Context } from "./web3Context";
import { getWeb3State } from "../utils/getWeb3State";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";
import {toast} from "react-hot-toast"

const Web3Provider = ({children})=>{
  const [web3State,setWeb3State]=useState({
    contractInstance:null,
    selectedAccount:null,
    chainId:null,
    signer:null,
    provider:null
  })
  const handleWallet = async()=>{
    try{
        if (!window.ethereum) {
            toast.error("Please install MetaMask to continue");
            return;
        }
        
        const {contractInstance,selectedAccount,chainId,signer,provider} = await getWeb3State();
        setWeb3State({contractInstance,selectedAccount,chainId,signer,provider})
        toast.success("Wallet connected successfully!");
    }catch(error){
        toast.error(error.message || "Failed to connect wallet");
        console.error("Error connecting wallet:", error);
    }
  }
  useEffect(()=>{
    window.ethereum.on('accountsChanged',()=>handleAccountChange(setWeb3State))
    window.ethereum.on('chainChanged',()=>handleChainChange(setWeb3State))

    return()=>{
        window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3State))
        window.ethereum.removeListener('chainChanged',()=>handleChainChange(setWeb3State))
    }
  },[])
  
  return (
    <> 
      <Web3Context.Provider value={{web3State,handleWallet}}>
        {children}
      </Web3Context.Provider>
     
    </>
  )
}
export default Web3Provider;