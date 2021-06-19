import React from 'react';

const MovieListHeading = (props) => {
	if(props.visible === true) return null;
	return (
		<div className='text-left headerName u-text-1'>
			<h2>{props.heading}</h2>
		</div>
	);
};

export default MovieListHeading;
