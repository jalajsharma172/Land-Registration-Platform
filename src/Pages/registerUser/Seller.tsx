import Navbar from '../../components/Navbar'
import Picture from '../../components/Picture';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import ViewLand from "./components/ViewLand";

const links = [
  
    { label: 'View Your Land' },    
    { label: 'Sell Your Land' },
    { label: 'View Buyers' },
    { label: 'Logout' },
];

function Seller() {
    const [activeForm, setActiveForm] = useState<string>('Dashboard');
    const renderForm = () => {
        switch (activeForm) {

            case 'View Your Land':
                return <ViewLand />;
            case 'Sell Your Land':
                return <VerifyLand />;
            case 'View Buyers':
                return <VerifyUser/>;
            case 'Logout':
                return <span>Form Logout Content</span>;

            default:
                return <div>Select a form from the sidebar</div>;
        }
    };

    return (
        <>
            <Navbar name='Sell Your Land' />

            <div className="flex flex-row ">
                <aside className="bg-slate-700" style={{ width: '250px', padding: '1rem', height: '100vh' }}  >


                    <Picture name='Me'></Picture>

                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {links.map((link, index) => (
                            <li key={index} style={{ margin: '1rem 0', display: 'flex', alignItems: 'center' }}>

                                <button
                                    onClick={() => setActiveForm(link.label)}
                                    style={{
                                        background: 'none', border: 'none', color: '#ecf0f1', fontSize: '1rem',
                                        cursor: 'pointer'
                                    }}>
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>


                </aside>
                <article className=" flex flex-row ">
                    <section className="bg-yellow-200 p-2 ">
                        {renderForm()}
                    </section>
                </article>

            </div>
        </>
    )
}

export default Seller;