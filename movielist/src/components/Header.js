import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-conntent">
                   <div className="brand">
                       <Link to="/">WatchWatched</Link>
                   </div> 
                   <nav>
                   <ul>
                       <li>
                           <Link to="/">WatchList</Link>
                       </li>
                       <li>
                           <Link to="/watched">Watched</Link>
                       </li>
                       <li>
                           <Link to="/add" className="btn">+ Add</Link>
                       </li>
                   </ul>
                   </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
