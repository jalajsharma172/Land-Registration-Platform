import {ethers} from "ethers"
import abi from "../constant/abi.json"
import axios from "axios"
import {toast} from "react-hot-toast"
export const getWeb3State = async()=>{
    try{
        if(!window.ethereum){
            throw new Error("Please install MetaMask to continue");
        }

        const accounts = await window.ethereum.request({
            method:'eth_requestAccounts'
        });


        const selectedAccount = accounts[0];
        const chainIdHex = await window.ethereum.request({
            method:'eth_chainId'
        });
        
        const chainId = parseInt(chainIdHex,16);

        // For ethers.js v6
        const provider = new ethers.BrowserProvider(window.ethereum);
        // For ethers.js v5
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        const signer = await provider.getSigner();
        const contractAddress = "0x1BAd10a4364aF6362B26866A5C10F6249A79f46A";

        // const message = "Welcome to Voting Dapp. You accept our terms and condition";
        // const signature = await signer.signMessage(message).catch(() => {
        //     throw new Error("Message signing rejected");
        // });
        
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);
        console.log("Contract instance initialized");
        
        if(!contractInstance) {
            throw new Error("Failed to initialize contract instance");
        }
            
        return {contractInstance, selectedAccount, chainId, signer, provider};
    }catch(error){
        console.error("Web3State Error:", error);
        throw error.message ? error : new Error("Failed to initialize Web3State");
    }
} 