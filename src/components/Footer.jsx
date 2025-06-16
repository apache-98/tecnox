import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpg";

export function Footer() {
    return (
        <footer className=' w-full bg-badgroud pb-8'>
            <div className='flex flex-col justify-center items-center bg-periwinkle text-textprimary h-[140px] w-full gap-4'>

                <span>
                    <img src={logo} alt="logo" className="h-14 w-auto object-contain rounded-3xl" />
                </span>

                <nav className='flex gap-8'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
                    <NavLink to="/About" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
                    <NavLink to="/Products" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Productos</NavLink>
                    <NavLink to="/infouser" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Historial</NavLink>
                   
                </nav>

            </div>
            <div className='flex gap-10'>


            </div>
            <div className=' bg-navy text-textprimary h-6 text-center pb-8'>
                <p>Proyecto creado para Bootcamp React -BIT - &copy; William Apache</p>
            </div>
        </footer>
    )
}
