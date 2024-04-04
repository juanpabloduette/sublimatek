import { BsHandbag } from 'react-icons/bs';
import useStore from './store/counter';

function App() {
	//  const counter = useStore(state => state.count)
	//  const increment = useStore(state => state.inc)

	const { count, inc, dec, reset } = useStore();
	return (
		<>
			<div className='h-52 w-52 bg-sky-400 flex justify-center items-center'>
				<h1 className='text-slate-700'>Sublimatek {count}</h1>
				<BsHandbag />
			</div>
			<button onClick={inc} className='bg-black text-slate-50 p-5'>
				+1
			</button>
			<button onClick={reset} className='bg-red-600 text-slate-50 p-5'>
				reset
			</button>
			<button onClick={dec} className='bg-slate-700 text-slate-50 p-5'>
				-1
			</button>
		</>
	);
}

export default App;
