import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	const imageClick = (movie) => {
		console.log('Image Click for ' + movie.title);
		props.handleVisibility(true);
		props.handleMovieDetail(movie);
	}

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3' key={index}>
					<img src={movie.poster} alt='movie' onClick={() => imageClick(movie)}></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
						key={movie.id}
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
