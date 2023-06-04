import React from 'react';
import search_active from '../../assets/search_active.svg'
import search from '../../assets/search.svg'
import book_2 from "../../assets/book_2.png";
import play from "../../assets/play.svg";
import forward from "../../assets/forward.svg";
import {Link} from "react-router-dom";
import home from "../../assets/home.svg";
import library from "../../assets/library.svg";

const Search = () => {
    return (
        <div className='main'>
            <main className='mainApp'>
                <div className='search'>
                    <img src={search} alt=""/>
                    <input className='search-input' type="text" placeholder='izdeu...'/>
                </div>
                <div className='history'>
                    <h2 className='history-title'>songy izdelim</h2>
                    <h3 className='history-clear'>oshiru</h3>
                </div>
                <div className='search_history'>
                   <svg className='search_history_clearl' width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 35C5 33.8954 5.89543 33 7 33H41C42.1046 33 43 33.8954 43 35V42H5V35Z" fill="none" stroke="#2b2b2b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 18L34 18L28 12L34 6L42 6" stroke="#2b2b2b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="12" r="4" fill="none" stroke="#2b2b2b" stroke-width="4"/><path d="M12 12L28 12" stroke="#2b2b2b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16L18 33" stroke="#2b2b2b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <h2 className='search_history_clear'>izdeu tarihy bos</h2>
                </div>
            </main>
            <footer className='mainFooter'>
                <div className='audiobook-ctrl'>
                    <img width='38px' height='54px'  src={book_2} alt=""/>
                    <div className='audiobook-inf'>
                        <h1 className='audiobook-accent'>Продолжить слушать</h1>
                        <p className='audiobook-subtitles'>
                            Managers who want to create positive work enviroments...
                        </p>

                    </div>
                    <div className='controls'>
                        <img  width='32px' height='32px' src={play} alt="play"/>
                        <img  width='32px' height='32px' src={forward} alt="play"/>
                    </div>
                </div>
                <nav>
                    <ul className='navbar'>
                        <Link to={'/homepage'} className='link'>
                            <li className='navbar-section '><img className='navlog' src={home} alt="homebtn"/><h1 className='navtitle '>Uige</h1></li>
                        </Link>
                        <Link to={'/search'} className='link'>
                            <li className='navbar-section navbar-section-active'><img className='navlog' src={search_active} alt="homebtn"/><h1 className='navtitle navtitleactive'>Izdeu</h1></li>
                        </Link>
                        <Link to={'/library'} className='link'>
                            <li className='navbar-section'><img className='navlog' src={library} alt="homebtn"/><h1 className='navtitle'>Kitaphana</h1></li>
                        </Link>
                    </ul>
                </nav>
            </footer>
        </div>
    );
};

export default Search;