import useStore from '../store/counter';

const Home = () => {
    const { count, inc, dec, reset } = useStore();
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
            </>
    )
}

export default Home