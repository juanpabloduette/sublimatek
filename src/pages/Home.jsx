import { Menu as MenuIcon } from '@mui/icons-material';
import useStore from '../store/counter';
import { useState } from 'react';
import { Menu,MenuItem, Button} from '@mui/material';
import { IoIosArrowDown } from "react-icons/io"; 


const Home = () => {
	const { inc, dec, reset } = useStore();
	
	const [open, setOpen] = useState(null)
	const handleClose = () => {
		setOpen(null)
	}
	const handleClick = (e) => {
		setOpen(e.currentTarget)
	}
	return (
		<>
			<button onClick={inc} className='bg-black text-slate-50 p-5'>
				+1
			</button>
			<button onClick={reset} className='bg-red-600 text-slate-50 p-5'>
				reset
			</button>
			<button onClick={dec} className='bg-slate-700 text-slate-50 p-5'>
				-1
			</button>
			<Button id='basic-button' size='small' endIcon={<IoIosArrowDown  color="white"/>} onClick={handleClick} onMouseOver={handleClick}>Categorias</Button>
			
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


			
		</>
	);
};

export default Home;
