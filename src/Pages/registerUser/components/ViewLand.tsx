import { useWeb3Context } from "../../../context/useWeb3Context";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from 'react';

function ViewLand(){
  const { web3State } = useWeb3Context();
  const { contractInstance} = web3State;
    
  useEffect(() => {
    const fetchCandidateList = async () => {
      try {
        if (!contractInstance) {
          console.log("Contract Instance Does Not Exist");
          return;
        }
        console.log(contractInstance);
        
        const ownerAddress = await contractInstance.getOwner();
       

      } catch (error) {
        console.error("Error fetching owner address:", error);
        toast.error("Failed to fetch owner address");
      }
    };
    
    if (contractInstance) {
      fetchCandidateList();
    }
  }, [contractInstance]);
    return(<>
        <h1>Hi bro</h1>

    </>)
}
export default ViewLand;