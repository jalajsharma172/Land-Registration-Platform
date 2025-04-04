import { createContext } from "react";
import { ethers } from "ethers";

// Define types for the context
interface Web3StateType {
  contractInstance: ethers.Contract | null;
  selectedAccount: string | null;
  chainId: number | null;
  signer: ethers.Signer | null;
  provider: ethers.Provider | null;
}

interface Web3ContextType {
  web3State: Web3StateType;
}

// Create context with default values
export const Web3Context = createContext<Web3ContextType>({
  web3State: {
    contractInstance: null,
    selectedAccount: null,
    chainId: null,
    signer: null,
    provider: null
  }
});