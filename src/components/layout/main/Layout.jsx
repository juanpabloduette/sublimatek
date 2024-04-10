import PropTypes from 'prop-types';
import Header from '../header/Header';
import Container from '@mui/material/Container';

const Layout = ({ children, footerVisible, headerVisible }) => {
	return (
		<div className='flex flex-col min-h-screen w-full'>
			{headerVisible && <Header />}

			<Container className='grow' maxWidth='xs'>
				{children}
			</Container>

			{footerVisible && (
				<footer className='bg-slate-950 h-20 w-full'>
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
};

export default Layout;
