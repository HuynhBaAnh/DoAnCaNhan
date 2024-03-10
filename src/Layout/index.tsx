import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import styles from './layout.module.scss';

export default function Layout() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 0);
        };

        // Manually set initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`transition-all duration-300 ${isScrolled ? 'opacity-100 ' : ''} fixed top-0 left-0 w-full z-20 bg-white`}>
                <Menu />
            </div>
            <main className="relative bg-slate-200" style={{ paddingTop: "100px" }}>
                <Outlet />
            </main>
            {isScrolled && (
                <div className={`fixed bottom-40 right-4 z-20 ${styles.booking}`}>
                    <Link to="/rooms" className="flex items-center justify-center p-2 bg-orange-600 text-white">
                        Booking Now
                    </Link>
                </div>
            )}
            <Footer />
        </>
    );
}
