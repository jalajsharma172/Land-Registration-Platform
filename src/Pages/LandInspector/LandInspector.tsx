import Navbar from '../../components/Navbar'
import Picture from '../../components/Picture';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import TransferOwnership from './components/TransferOwnership';
import VerifyLand from './components/VerifyLand';
import VerifyUser from './components/VerifyUser';

const links = [
    { label: 'Dashboard' },
    { label: 'Transfer Ownership' },
    { label: 'Verfify Land' },
    { label: 'Verfify User' },
    { label: 'Logout' },
];

function LandInspector() {
    const [activeForm, setActiveForm] = useState<string>('Dashboard');
    const renderForm = () => {
        switch (activeForm) {
            case 'Dashboard':
                return < Dashboard />;
            case 'Transfer Ownership':
                return <TransferOwnership />;
            case 'Verfify Land':
                return <VerifyLand />;
            case 'Verfify User':
                return <VerifyUser/>;
            case 'Logout':
                return <span>Form Logout Content</span>;

            default:
                return <div>Select a form from the sidebar</div>;
        }
    };

    return (
        <>
            <Navbar name='Land Inspector Dashboard' />

            <div className="flex flex-row ">
                <aside className="bg-slate-700" style={{ width: '250px', padding: '1rem', height: '100vh' }}  >


                    <Picture name='Inspector 1'></Picture>

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

export default LandInspector;