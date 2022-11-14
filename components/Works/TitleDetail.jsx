import React from 'react';

const TitleDetail = ({ title, url }) => {
	return (
		<>
			<a href={url} target='_blank' rel='noreferrer'>
				<h1 className='work-title leading-none md:leading-tight blur_effect cursor-pointer'>{title}</h1>
			</a>
		</>
	);
};

export default TitleDetail;
