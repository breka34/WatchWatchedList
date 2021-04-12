import React, { useContext } from 'react';
import { GlobalContext} from '../context/GlobalState';
import MovieCard from './MovieCard';
import './Watch.css';


const WatchList = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <div className="movie-page">
           <div className="container">
               <div className="header">
                   <h1 >My Watchlist</h1>
                   <div className="title-watchlist"></div>
               </div>
              
              {watchlist.length > 0 ? (
                <div className="movie-grid">
              {watchlist.map((movie,id ) => (
                   <MovieCard key={id} movie={movie} type="watchlist" />
                   ))}
              </div>
              ) : (
                  <h4 className="no-movies">No movies in your list, add some!</h4>
              )}
            
           </div>
        </div>
    )
}

export default WatchList
