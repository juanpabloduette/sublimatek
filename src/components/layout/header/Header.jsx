import { BsHandbag } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./Header.css"
import logo from '../../../assets/images/logo.png';
import useStore from '../../../store/counter';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { count } = useStore();
    return (
    <header className="flex justify-between items-center bg-black">
        <div className="text-stone-50"><img src={logo} alt="Sublimatek"/></div>
        <nav className={`nav_items ${isOpen && "open"}`}>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Inicio</Link>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Categorias<IoIosArrowDown /></Link>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Como comprar</Link>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Mayoristas</Link>
                <Link to='/Contacto' onClick={ () => setIsOpen(!isOpen)}>Contacto</Link>
        </nav>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
        </div>
        <div className="cart relative m-2">
            <BsHandbag  color="white" size={35} />
            <div className="w-5 h-5 bg-red-600 rounded-full absolute top-5 left-4">
                <p className="text-xs absolute left-1.5 top-0.5 text-stone-50">{count}</p>
            </div>
        </div>
    </header>
    )
}

export default Header

