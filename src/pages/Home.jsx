import useStore from '../store/counter';
import Layout from '../components/layout/main/Layout';

const Home = () => {
	const { inc, dec, reset } = useStore();

	return (
		<>
			<Layout footerVisible={true} headerVisible={true}>
				<button onClick={inc} className="bg-slate-400 text-slate-50 p-5">
					+1
				</button>
				<button onClick={reset} className="bg-red-600 text-slate-50 p-5">
					reset
				</button>
				<button onClick={dec} className="bg-slate-700 text-slate-50 p-5">
					-1
				</button>
			</Layout>
		</>
	);
};

export default Home;
