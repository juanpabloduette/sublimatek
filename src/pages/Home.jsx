import { Menu } from '@mui/icons-material';
import useStore from '../store/counter';
import Button from '@mui/material/Button';

const Home = () => {
	const { inc, dec, reset } = useStore();
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
			<Button variant='contained'>Hola</Button>
			<Menu />

			<Button variant='outlined' color='primary'>
				Hola
			</Button>
		</>
	);
};

export default Home;
