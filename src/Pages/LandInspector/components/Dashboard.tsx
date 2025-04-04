import React, { useState } from 'react';

function Dashboard() {
    const [UserReg,setUserReg]=useState(0);
    const [Property_Registered,setProperty_Registered]=useState(0);
    const [Property_Transferred,setProperty_Transferred]=useState(0);
    return (
        <div className="flex justify-around p-4 w-full ">
            <div className="w-1/3 h-24 bg-blue-600 text-white  rounded shadow-md ">
                <span className="text-2xl block">{UserReg}</span>
                <span>Total Users Registered</span>
            </div>
            <div className="w-1/3 h-24 bg-blue-400 text-white rounded shadow-md">   
                <span className="text-2xl block">{Property_Registered}</span>
                <span>Total Property Registered</span>
            </div>
            <div className="w-1/3 h-24 bg-orange-500 text-white rounded shadow-md">
                <span className="text-2xl block">{Property_Transferred}</span>
                <span>Total Property Transferred</span>
            </div>
        </div>
    );
}

export default Dashboard;