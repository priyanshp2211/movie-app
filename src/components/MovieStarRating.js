import StarRatings from "react-star-ratings";


const MovieStarRating = (props) => {

    return (
        <StarRatings
            rating={props.rating}
            starRatedColor="yellow"
            numberOfStars={5}
            name='rating'
        />
    );
}

export default MovieStarRating;