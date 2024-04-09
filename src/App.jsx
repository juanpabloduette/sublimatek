import Header from './components/layout/header/Header';
import {Route, Routes} from 'react-router-dom';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

	
	return (
		<>
			<Header />
			<Routes>
				{ <Route path="/" element={<Home />} />}
				{ <Route path="/Categories" element={<Categories />} />}
				{ <Route path="/Contacto" element={<Contact />} />}
			</Routes>
		</>
	);
}

export default App;
