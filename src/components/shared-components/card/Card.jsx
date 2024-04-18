import {
	Card as MUICard,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from '@mui/material';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import PropTypes from 'prop-types';

const Card = ({ props, tagIcon, tagDescription, description }) => {
	const { title, img, price, category } = props || {};

	return (
		<>
			<MUICard className="m-2" sx={{ borderRadius: 3 }}>
				<CardMedia
					title={title}
					image={img}
					className="object-cover h-96 relative"
				>
					<div className="flex items-center gap-1 p-2 mt-3  bg-red-500 absolute rounded-e-lg">
						{true && tagIcon} <p>{tagDescription}</p>
					</div>
				</CardMedia>
				<CardContent>
					<h2>{title}</h2>
					<p>{true && description}</p>
					<div className="flex justify-between">
						{price} <p>{category}</p>
					</div>
				</CardContent>
				<CardActions>
					<Button fullWidth size="large" variant="outlined">
						More details
					</Button>
					<Button
						size="large"
						variant="contained"
						sx={{ background: '#1c1c1c', borderRadius: 3 }}
					>
						<HiOutlineShoppingCart size={28} />
					</Button>
				</CardActions>
			</MUICard>
		</>
	);
};

export default Card;

Card.propTypes = {
	tagIcon: PropTypes.node,
	tagDescription: PropTypes.string,
	description: PropTypes.string,
	props: PropTypes.object,
};
