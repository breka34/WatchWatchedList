import React, { useContext } from 'react';
import { FaEye,FaWindowClose} from 'react-icons/fa';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie, type}) => {
    const {addMovieToWatched,removeMovieFromWatchlist,  movieToWatchlist, removeFromWatched, watched} = useContext(GlobalContext);
    let storedMovie = watched.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <main>
                    <button className="ctrl-btn"
                    disabled={ watchlistDisabled }
                    onClick={() =>  addMovieToWatched(movie)}
                    >
                    <FaEye className="eye" />
                    </button>
                    <button className="ctrl-btn"
                    onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                    <FaWindowClose className="x"/>
                    </button>
                </main>
            )}

            {type === 'watched' && (
                <main>
                <button className="ctrl-btn"
                    onClick={() =>  movieToWatchlist(movie)}
                    >
                    <FaEye className="eye" />
                    </button>
                    <button className="ctrl-btn"
                    onClick={() =>  removeFromWatched(movie.id)}
                    >
                    <FaWindowClose className="x" />
                    </button>
                </main>
            )} 
        </div>
    )
}

export default MovieControls
