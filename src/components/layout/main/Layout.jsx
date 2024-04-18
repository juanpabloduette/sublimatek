import PropTypes from 'prop-types';
import Header from '../header/Header';
import Container from '@mui/material/Container';

const Layout = ({ children, footerVisible, headerVisible, slider }) => {
	return (
		<div className="flex flex-col min-h-screen w-full">
			{headerVisible && <Header />}

			{/*
			 *Crear componente slider
			 */}
			{slider && (
				<div className="w-full h-40">
					<img src="../.././assets/sliders/slider2.png" alt="" />
				</div>
			)}

			<Container className="grow pb-10" maxWidth="xs">
				{children}
			</Container>

			{footerVisible && (
				<footer className="bg-slate-950 h-20 w-full">
					<p>Este es el footer</p>
				</footer>
			)}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
	footerVisible: PropTypes.bool,
	headerVisible: PropTypes.bool,
	slider: PropTypes.bool,
};

export default Layout;
