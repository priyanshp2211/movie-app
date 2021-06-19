import React from 'react';

const SearchBox = (props) => {

	const searchClick = (value) => {
		props.handleVisibility(false);
		props.setSearchValue(value)
	}

	return (
		<div className='form-inline mx-auto u-align-right'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => searchClick(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
