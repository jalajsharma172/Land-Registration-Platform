import React from 'react';
import SideBar from '../components/SideBar';

const HomePage = () => {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <div style={{ display: 'flex' }}>
            <SideBar links={links} />
            <main style={{ marginLeft: '260px', padding: '1rem' }}>
                <h1>Welcome to My Website</h1>
                <p>This is the main content area.</p>
            </main>
        </div>
    );
};

export default HomePage;
