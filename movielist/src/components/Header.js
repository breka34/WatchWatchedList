import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { FaWindowClose } from 'react-icons/fa';

const Header = () => {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    return (
        <header>
            <div className="container">
                <div className="inner-conntent">
                   <div className="brand" >
                       <Link onClick={() => setOpen(!open)} to="/">WatchWatched</Link>
                   </div> 
                   <nav className="nav" id={open ? 'hidden' : ''}>
                   <div className="link">
                   <ul className="dropdown-menu">
                   <li  className="float" onClick={() => setOpen(!open)} >
                       <FaWindowClose  />
                   </li>
                       <li className="li2">
                           <Link to="/watchlist">WatchList</Link>
                       </li>
                       <li className="li3">
                           <Link to="/watched">Watched</Link>
                       </li>
                       <li className="li4">
                           <Link to="/" className="btn">+ Add</Link>
                       </li>
                   </ul> 
                   </div>
                   </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
