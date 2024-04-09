import { useEffect, useState } from 'react';
import apiData from './api.json';

const MapGamer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(apiData);
	}, []);

	return (
		<>
			<h1>Products</h1>

			{data
				.filter(el => el.category.includes('clubber'))
				.map(el => (
					<div key={el.id}>
						<p>{el.category}</p>
					</div>
				))}
		</>
	);
};

export default MapGamer;
