import { BsHandbag } from "react-icons/bs";
import useStore from "./store/counter";


function App() {
//  const counter = useStore(state => state.count)
//  const increment = useStore(state => state.inc)

 const { count, inc } = useStore()
  return (
    <>

      <div className="h-52 w-52 bg-sky-400 flex justify-center items-center">
      <h1 className="text-slate-700">Sublimatek {count}</h1>
      <BsHandbag/>
      <button onClick={inc}>+1</button>
      <p>hola</p>
      </div>
      
    </>
  )
}

export default App
