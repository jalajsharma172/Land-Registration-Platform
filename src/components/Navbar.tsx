import React from 'react';
import { useWeb3Context } from '../context/useWeb3Context';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const { web3State, handleWallet } = useWeb3Context();
  const navigate = useNavigate();

  const handleDisconnect = () => {
    handleWallet(false);
    navigate('/');
  };

  return (
    <nav className="bg-slate-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">{name}</h1>
      {web3State.selectedAccount && (
        <div className="flex items-center gap-4">
          <span className="text-white">
            {web3State.selectedAccount.slice(0, 6)}...{web3State.selectedAccount.slice(-4)}
          </span>
          <button
            onClick={handleDisconnect}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Disconnect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;