import React from 'react';

const Item = ({ value }) => {
	const { name, desc } = value;
	return (
		<div className='stack-item flex flex-row justify-between py-2'>
			<h3>{desc}</h3>
			<p>{name}</p>
		</div>
	);
};

export default Item;
