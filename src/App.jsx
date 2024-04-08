import Header from './components/layout/header/Header';
import {Route, Routes} from 'react-router-dom'
import Contacto from './pages/Contacto';
import Home from './pages/Home';

function App() {

	
	return (
		<>
			<Header />
			<Routes>
				{ <Route path="/" element={<Home />} />}
				{ <Route path="/Contacto" element={<Contacto />} />}
			</Routes>
		</>
	);
}

export default App;
