import { useEffect, useState } from "react";
import { useWeb3Context } from "../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Wallet = () => {
    const [isConnecting, setIsConnecting] = useState(false);
    const { handleWallet, web3State } = useWeb3Context();
    const { selectedAccount } = web3State;
    const navigateTo = useNavigate();
    useEffect(() => {
        if (selectedAccount) {
            navigateTo('/');
        }
    }, [selectedAccount]);

    const connectWallet = async () => {
        setIsConnecting(true);
        try {
            await handleWallet();
        } finally {
            setIsConnecting(false);
        }
    };
    if(selectedAccount){

    }
    return (
        <button   onClick={connectWallet}   disabled={isConnecting}  className="p-2  "  >
            {
                selectedAccount ? selectedAccount.slice(0,8) :    isConnecting ? 'Connecting...' : 'Connect Wallet'
            }
         
        
        </button>
    );
};

export default Wallet;