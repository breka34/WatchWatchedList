import React, { useContext } from 'react';
import { GlobalContext, GlobalState } from '../context/GlobalState';
import MovieCard from './MovieCard'
import './Watch.css';
const Watched = () => {
    const { watched } = useContext(GlobalContext);
    return (
        <div className="movie-page">
           <div className="container">
               <div className="header">
                   <h1>Watched movies </h1>
               </div>
              
              {watched.length > 0 ? (
                <div className="movie-grid">
              {watched.map((movie, id) => (
                   <MovieCard key={id} movie={movie} type="watched" />
                   ))}
              </div>
              ) : (
                  <h4 className="no-movies">No movies in your list, add some!</h4>
              )}
            
           </div>
        </div>
    )
}

export default Watched
