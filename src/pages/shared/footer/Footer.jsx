import React from 'react';
import Logo from '../../../components/logo/Logo';
import { SiX } from 'react-icons/si';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10 flex flex-col md:flex-row md:justify-between">
            
            {/* Logo & Text */}
            <aside className="text-center md:text-left mb-6 md:mb-0">
                <Logo />
                <p className="font-bold mt-2">
                    BookCourier Ltd.
                    <br />
                    Providing reliable delivery since 2022
                </p>
                <p className="mt-2 text-sm">
                    &copy; {new Date().getFullYear()} - All rights reserved
                </p>
            </aside>

            {/* Quick Links */}
            <nav className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="font-bold mb-2">Quick Links</h3>
                <div className="flex flex-col space-y-1">
                    <a href="/" className="hover:text-orange-400">Home</a>
                    <a href="/about" className="hover:text-orange-400">About</a>
                    <a href="/all-Book" className="hover:text-orange-400">All Book</a>
                    <a href="/coverage" className="hover:text-orange-400">Coverage</a>
                </div>
            </nav>

            {/* Social Icons */}
            <div className="text-center md:text-left">
                <h3 className="font-bold mb-2">Follow Us</h3>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <SiX size={24} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaFacebookF size={24} />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
