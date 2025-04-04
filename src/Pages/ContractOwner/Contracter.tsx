import Navbar from "../../components/Navbar";
import Picture from "../../components/Picture";
import React, { useState, useEffect } from 'react';
import Dashboard from "./components/Dashboard";
import AddLandInspector from "./components/AddLandInspector";
import AllLandInspector from "./components/AllLandInspector";
import { useWeb3Context } from "../../context/useWeb3Context";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

interface SideBarProps {
  links: { label: string; id: string; icon: React.ReactNode }[];
  className?: string;
  style?: React.CSSProperties;
}

const links = [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Add Land Inspector', id: 'add-inspector' },
  { label: 'All Land Inspector', id: 'all-inspectors' }, // Fixed typo "Ispector" to "Inspector"
  { label: 'Change Contract Owner', id: 'change-owner' },
  { label: 'Logout', id: 'logout' },
];

const Contract = () => {
  const navigate = useNavigate();
  const { web3State } = useWeb3Context();
  const { contractInstance} = web3State;
  const [ownerAddress,setownerAddress]=useState(null);
  const [activeForm, setActiveForm] = useState<string>('Dashboard');
  const [userAccount,setuserAccount]=useState(null);
  const [ownerAccount,setownerAccount]=useState(null);

  useEffect(() => {
    const fetchCandidateList = async () => {
      try {
        if (!contractInstance) {
          console.log("Contract Instance Does Not Exist");
          return;
        }
        console.log(contractInstance);
        
        // Use contract call method that matches your ABI exactly - check capitalization
        const ownerAddress = await contractInstance.getOwner();
        setownerAccount(ownerAddress.toLowerCase());
        console.log("Address owner is " + ownerAddress);
        
          const accounts = await window.ethereum.request({
            method:'eth_requestAccounts'
        });
        const useraccount=accounts[0].toLowerCase();
        setuserAccount(useraccount.toLowerCase());

      console.log("User Accoutn is " ,useraccount);
      if(useraccount!=ownerAddress.toLowerCase())handleLogout();

      } catch (error) {
        console.error("Error fetching owner address:", error);
        toast.error("Failed to fetch owner address");
      }
    };
    
    if (contractInstance) {
      fetchCandidateList();
    }else{
      handleLogout();
    }
  }, [contractInstance]);


  const renderForm = () => {
    switch (activeForm) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Add Land Inspector':
        return <AddLandInspector />;
      case 'All Land Inspector': // Fixed to match the corrected label
        return <AllLandInspector />;
      case 'Change Contract Owner':
        return <span>Form Transfer Ownership Content</span>;
      case 'Logout':
        handleLogout();
        return null;
      default:
        return <div>Select a form from the sidebar</div>;
    }
  };

  const handleLogout = () => {
    // Add any logout logic here
    navigate('/');
  };

  return (
    <>
      <Navbar name='Land Registry+Lottery Dapp' />
      <div className="flex">
        <aside className="bg-slate-700 w-64 p-4 h-screen sticky top-0">
          <Picture name='Contract Owner' />
          <ul className="space-y-4 mt-4">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setActiveForm(link.label)}
                  className={`w-full text-left text-white hover:bg-slate-600 p-2 rounded transition-colors ${
                    activeForm === link.label ? 'bg-slate-500' : ''
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-4 bg-yellow-50">
          {renderForm()}
        </main>
      </div>
    </>
  );
}

export default Contract;