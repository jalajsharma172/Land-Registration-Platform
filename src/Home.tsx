import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WalletContext } from './context/WalletContext';
import ConnectWalletButton from './components/ConnectWalletButton';

function Home() {
    return (<>
        <Navbar />
    </>)
}

function Navbar() {
    return (
        <>
            <nav className="text-white p-2 font-bold gap-3 bg-slate-700 flex flex-row justify-end align-middle">
                <ul className='flex flex-row gap-3'>
                    <li><Link to="/owner">Contract Owner</Link></li>    
                    <li><Link to="/seller">Seller </Link></li>
                    <li><Link to="/inspector">Land Inspector</Link></li>
                    <li><Link to="/buyer">Buyer</Link></li>
                    
                     
                </ul>
                <ConnectWalletButton />
            </nav>
        </>
    )
}

export default Home;