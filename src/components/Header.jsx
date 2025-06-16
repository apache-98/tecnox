import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/useContext';
import logo from "../assets/logo.jpg";
import { Icon } from '@iconify/react';

export function Header() {
    const {logout} = useUser()
    const { car } = useCart();
    const carCount = car.length;
    const [isOpen, setIsOpen] = useState(false);
    const navLinkStyle = ({ isActive }) =>
        isActive ? "font-bold underline text-hoverbotton" : "text-gray-900 dark:text-white";

    return (
        <nav className=" border-gray-200 bg-badgroud">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="TecnoX Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TecnoX</span>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-hoverbotton focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-badgroud md:bg-badgroud dark:border-gray-700">
                        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                        <li><NavLink to="/About" className={navLinkStyle}>About</NavLink></li>
                        <li><NavLink to="/Products" className={navLinkStyle}>Products</NavLink></li>
                        <li><NavLink to="/infouser" className={navLinkStyle}>Historial</NavLink></li>
                        <li><NavLink to="/Login" className={navLinkStyle}>Login</NavLink></li>
                        <li><button className="text-gray-900 dark:text-white hover:underline" onClick={logout}>Cerrar sesion</button></li>
                        
                        <li><NavLink to="/MyCart" className="relative"><Icon icon={"mdi-light:cart"} width={30} hanging={30} className='text-hoverbotton' />{carCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-botton text-white text-xs font-bold rounded-full px-1.5">
                                {carCount}
                            </span>
                        )}</NavLink></li>
                        



                    </ul>
                </div>
            </div>
        </nav>
    );
}


