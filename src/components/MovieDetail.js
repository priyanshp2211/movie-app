import React from 'react';
import MovieStarRating from "./MovieStarRating";

const MovieDetail = (props) => {

    if(props.visible === false){
        console.log("Isn't visible");
        return null;
    }
    console.log("Is visible");
    const year = new Date(props.movieDetail.released_on).getFullYear();
    const casts = props.movieDetail.cast.toString();
    return (

        <section className="u-clearfix u-grey-25 u-section-1 mt-6" id="sec-776c">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout mt-4">
                        <div className="u-layout-row">
                            <div className="u-container-style u-image u-layout-cell u-size-22 u-image-1"
                                 data-image-width="1280" data-image-height="849">
                                <div className="u-container-layout u-container-layout-1">
                                    <img src={props.movieDetail.poster} alt='detail_poster'></img>
                                </div>
                            </div>
                            <div className="u-container-style u-grey-25 u-layout-cell u-size-38 u-layout-cell-2">
                                <div className="u-container-layout u-container-layout-2">
                                    <div
                                        className="u-container-style mx-auto">
                                    <h3 className="u-text u-text-1">{props.movieDetail.title} ({props.movieDetail.imdb_rating})</h3>
                                        <MovieStarRating
                                            rating={props.movieDetail.imdb_rating}
                                        />
                                    </div>
                                    <p className="u-text u-text-2">{year} | {props.movieDetail.length} | {props.movieDetail.director} </p>
                                    <p className="u-text u-text-3">cast : {casts} </p>
                                    <p className="u-text u-text-4">Movie Description: {props.movieDetail.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;