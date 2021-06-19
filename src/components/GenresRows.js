import React from 'react';
import MovieListHeading from "./MovieListHeading";
import MovieList from "./MovieList";

const GenresRows = (props) => {
    if(props.visible === true) return null;

    const rows = [];
    Object.entries(props.genresMap).forEach(([genres,movies]) => {
        const header = (
            <div className='row d-flex align-items-center mt-4 mb-4' key={genres}>
                <MovieListHeading heading={genres} />
            </div>
        );
        rows.push(header);
        var timestamp = genres + new Date().getTime();
        const movieRow = (
            <div className='row' key={timestamp}>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={props.handleFavouritesClick}
                    favouriteComponent={props.favouriteComponent}
                    handleVisibility={props.handleVisibility}
                    handleMovieDetail={props.handleMovieDetail}
                />
            </div>
        );
        rows.push(movieRow);
    })

    return (
        <>
            {rows}
        </>
    );
};

export default GenresRows;