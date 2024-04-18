import { useState, useEffect } from 'react';
import Layout from '../components/layout/main/Layout';
import Card from '../components/shared-components/card/Card';
import { BiSolidDiscount } from 'react-icons/bi';

const Categories = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('../../src/api/api.json')
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.log('error', error));
	}, []);
	return (
		<Layout headerVisible={true} footerVisible={true}>
			<div className="flex justify-center flex-col">
				{data?.map((product, index) => (
					<Card
						key={index}
						props={product}
						tagIcon={<BiSolidDiscount />}
						tagDescription="Envio Gratis"
					/>
				))}
			</div>
		</Layout>
	);
};

export default Categories;
