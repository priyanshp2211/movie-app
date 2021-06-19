import MovieList from "./MovieList";
import React from "react";


const DisplayFavourite = (props) => {
    if(props.visible === true) return null;
    return (
        <div className='row'>
            <MovieList
            movies={props.movies}
            handleFavouritesClick={props.handleFavouritesClick}
            favouriteComponent={props.favouriteComponent}
        />
        </div>
    );
};

export default DisplayFavourite;