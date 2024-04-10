import { Menu as MenuIcon } from '@mui/icons-material';
import useStore from '../store/counter';
import { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';

import Layout from '../components/layout/main/Layout';

const Home = () => {
	const { inc, dec, reset } = useStore();

	const [open, setOpen] = useState(null);
	const handleClose = () => {
		setOpen(null);
	};
	const handleClick = e => {
		setOpen(e.currentTarget);
	};
	return (
		<>
			<Layout footerVisible={true} headerVisible={true}>
				<button onClick={inc} className='bg-slate-400 text-slate-50 p-5'>
					+1
				</button>
				<button onClick={reset} className='bg-red-600 text-slate-50 p-5'>
					reset
				</button>
				<button onClick={dec} className='bg-slate-700 text-slate-50 p-5'>
					-1
				</button>
				<Button variant='contained'>Hola</Button>
				<Menu />

				<Button variant='outlined' color='primary'>
					Hola
				</Button>
			</Layout>
		</>
	);
};

export default Home;
