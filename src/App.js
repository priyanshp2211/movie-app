import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './nicepage.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import GenresRows from "./components/GenresRows";
import MovieDetail from "./components/MovieDetail";
import DisplayFavourite from "./components/DisplayFavourite"

const App = () => {
	const token = 'Bearer Wookie2021'
	const [movies, setMovies] = useState([]);
	const [genresMap, setGenresMap] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [showResults, setShowResults] = React.useState(false)
	const [movieDetail, setMovieDetail] = useState([]);


    const loadMovies = async () => {
		const url = 'https://wookie.codesubmit.io/movies';
		const response = await fetch(url, {
		    headers: {"Authorization": token}});
		const responseJson = await response.json();

		if (responseJson.movies) {
			setMovies(responseJson.movies);
		}
	};
    //Get movies
	const getMovieRequest = async (searchValue) => {
		const searchUrl = 'https://wookie.codesubmit.io/movies?q=' + searchValue;
		const response = await fetch(searchUrl,{
              headers: {"Authorization": token}});
		const responseJson = await response.json();

		if (responseJson.movies) {
			setMovies(responseJson.movies);
        }
	};

	useEffect(() => {
		loadMovies();
	},[]);

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		let movieMap = {};
		for (let movieObj of movies) {
			for(let genres of movieObj.genres){
				// Shorcut || returns left side if it is "truthy," or the right otherwise.
				// This means that we only assign a new Array to the Object's property
				// if it has not previously been used.
				movieMap[genres] = movieMap[genres] || [];
				// Adds a value to the end of the Array
				movieMap[genres].push(movieObj);
			}
		}
		setGenresMap(movieMap);
	}, [movies]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row u-border-2 u-border-black u-section-row'>
				<MovieListHeading heading='Wookie Movies' />
				<SearchBox searchValue={searchValue}
						   setSearchValue={setSearchValue}
						   handleVisibility ={setShowResults}
				/>
			</div>
			<MovieDetail
				visible = {showResults}
				movieDetail = {movieDetail}
			/>
			<GenresRows
				genresMap={genresMap}
				handleFavouritesClick={addFavouriteMovie}
				favouriteComponent={AddFavourites}
				visible = {showResults}
				handleVisibility ={setShowResults}
				handleMovieDetail={setMovieDetail}
				/>
			<MovieListHeading
				heading='Favourites'
				visible = {showResults}
			/>
			<DisplayFavourite
				movies={favourites}
				handleFavouritesClick={removeFavouriteMovie}
				favouriteComponent={RemoveFavourites}
				visible = {showResults}
				/>

		</div>
	);
};

export default App;
