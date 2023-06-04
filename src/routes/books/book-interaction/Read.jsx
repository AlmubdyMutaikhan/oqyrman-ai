import React from 'react';
import './interaction.css'
import chevrondown from '../../../assets/chevron-down.svg'
import headphones from "../../../assets/headphones.svg";
import playbtn from '../../../assets/play.svg'
import menu from '../../../assets/menu.svg'
import book_2 from "../../../assets/book_2.png";
import play from "../../../assets/play.svg";
import forward from "../../../assets/forward.svg";
import {Link} from "react-router-dom";
import home_active from "../../../assets/home_active.svg";
import search from "../../../assets/search.svg";
import library from "../../../assets/library.svg";
const Read = () => {
    const goBack = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    return (
        <div>
            <header className='interpage-header bookpage-mainApp'>
                <h1 className='interpage-booktitle'>
                    Futurama
                </h1>
                <nav className='interpage-uppernav'>
                    <Link to='/books/1000002'>
                        <img width='24px' height='24px' src={chevrondown} alt=""/>
                    </Link>
                    <ul className='interpage-uppernavbtns '>
                        <li><Link to='/books/1000002/audio'>
                            <img width='24px' height='24px' src={headphones} alt=""/>
                        </Link></li>
                        <li><img src={playbtn} width='24px' height='24px'  alt=""/></li>
                        <li><img src={menu} width='20px' height='20px'  alt=""/></li>
                    </ul>
                </nav>
            </header>
            <main className='mainApp'>
                <h2 className='interpage-chapter'>
                    Chapter 1
                </h2>
                <p className='interpage-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut explicabo fugit inventore ipsum officia ratione reiciendis repellendus ut veniam. Architecto earum enim est modi molestiae saepe sunt vero voluptas.
                </p>
            </main>
            <button onClick={goBack} className='interpage-goback'>
               <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 30L25 18L37 30" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <footer className='mainFooter'>

                <nav>
                    <ul className='navbar'>
                        <Link to={'/homepage'} className='link'>
                            <li className='navbar-section navbar-section-active'><img className='navlog' src={home_active} alt="homebtn"/><h1 className='navtitle navtitleactive'>Uige</h1></li>
                        </Link>
                        <Link to={'/search'} className='link'>
                            <li className='navbar-section'><img className='navlog' src={search} alt="homebtn"/><h1 className='navtitle'>Izdeu</h1></li>
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

export default Read;