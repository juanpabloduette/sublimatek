import { BsHandbag } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./Header.css"
import logo from '../../../assets/images/logo.png';
import useStore from '../../../store/counter';
import { IoIosArrowDown } from "react-icons/io";
import { Menu,MenuItem, Button, Typography} from '@mui/material';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { count } = useStore();
    const [open, setOpen] = useState(null)
	const handleClose = () => {
		setOpen(null)
	}
	const handleClick = (e) => {
		setOpen(e.currentTarget)
	}

    return (
    <header className="flex justify-between items-center bg-black">
        <div className="text-stone-50"><img src={logo} alt="Sublimatek"/></div>
        <nav className={`nav_items ${isOpen && "open"}`}>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Inicio</Link>
                <Link to='' onClick={ () => setIsOpen(!isOpen)}>
                    <Button id='basic-button' size='small' style={{ padding: 0 }} endIcon={<IoIosArrowDown  color="white"/>} onClick={handleClick}>
                        <Typography variant="body1" style={{ fontFamily: 'sistem-ui', fontSize: '11px' }}>Categorias</Typography>
                    </Button>
                    <Menu
                    id="basic-menu"
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                    autoFocus={false}
                    transitionDuration={200}
                    >
                        <MenuItem onClick={handleClose}>Colección Clubber</MenuItem>
                        <MenuItem onClick={handleClose}>Colección Gamer</MenuItem>
                        <MenuItem onClick={handleClose}>Colección Anime</MenuItem>
                        <MenuItem onClick={handleClose}>Colección Sport</MenuItem>
                        <MenuItem onClick={handleClose}>Colección Music</MenuItem>
                        <MenuItem onClick={handleClose}>Colección Series</MenuItem>
                    </Menu> 
                </Link>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Como comprar</Link>
                <Link to='/' onClick={ () => setIsOpen(!isOpen)}>Mayoristas</Link>
                <Link to='/Contacto' onClick={ () => setIsOpen(!isOpen)}>Contacto</Link>
        </nav>
        <div className="flex items-center">
            <div className="cart relative m-2">
                <BsHandbag  color="white" size={32} />
                <div className="w-5 h-5 bg-red-600 rounded-full absolute top-4 left-4">
                    <p className="text-xs absolute left-1.5 top-0.5 text-stone-50">{count}</p>
                </div>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div>
    </header>
    )
}

export default Header

