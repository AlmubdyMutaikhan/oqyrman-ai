import React from 'react';
import book_2 from '../../assets/book_2.png'
import './bookpage.css'
import bookmark from '../../assets/bookmark.svg'
import bookf from '../../assets/book.svg'
import headphones from '../../assets/headphones.svg'
import clock from '../../assets/clock.svg'
import lightbulb from '../../assets/lightbulb.svg'
import full from "../../assets/full.svg";
import book_1 from "../../assets/book_1.png";
import book_3 from "../../assets/book_3.png";
import book_4 from "../../assets/book_4.png";
import {Link} from "react-router-dom";
import short from "../../assets/short.svg";
import read from "../../assets/read.svg";
import home_active from "../../assets/home_active.svg";
import search from "../../assets/search.svg";
import library from "../../assets/library.svg";
import play from "../../assets/play.svg";
import forward from "../../assets/forward.svg";
const Bookpage = () => {

    const Book = (props) => {
        return (
            <Link to={props.link} className='book'>
                <img className='book_cover' src={props.img} alt="book"/>
                <h1 className='book-title'>{props.inf.booktitle}</h1>
                <h2 className='book-author'>{props.inf.author}</h2>
                <ul className='bookinf-frame'>
                    <li className='bookinf'>
                        <img src={short} width='16px' height='16px' alt="Длительность"/><p className='bookinftxt'>{props.inf.listentime}</p>
                    </li>
                    <li className='bookinf'>
                        <img src={read} width='16px' height='16px' alt="Длительность"/><p className='bookinftxt'>{props.inf.readtime}</p>
                    </li>
                </ul>

            </Link>
        )
    }

    return (
        <div className='main bookpage'>
            <div className='bookpage-headerbg'>
            </div>
            <header className='bookpage-header'>
                <img className='bookpage-bookcover' src={book_2} width='153px' height='220px' alt=""/>
                <div className='bookpage-bookinteraction'>
                    <Link className='bookinteraction-btn' to='read'>
                        <img width='24px' height='24px' src={bookf} alt=""/>
                        oqu
                    </Link>
                    <hr className='bookpage-bookinteraction-hr'/>
                    <Link to={'audio'} className='bookinteraction-btn' >
                        <img width='24px' height='24px' src={headphones} alt=""/>
                        tyndau
                    </Link>
                </div>
                <article className='bookpage-mainApp'>

                    <h1 className='bookpage-booktitle'>FUTURAMA <img width='20px' height='20px' className='bookmark' src={bookmark} alt=""/></h1>
                    <h2 className='bookpage-bookauthor'>Michael Douglas jr.</h2>
                </article>
                <main className='bookpage-mainApp'>
                    <div className='bookpage-bookinf'>
                        <div className='bookpage-bookinf-sec'>
                            <img width='20px' height='20px' src={clock} alt=""/>
                            18 min
                        </div>
                        <hr className='bookpage-bookinteraction-hr'/>
                        <div className='bookpage-bookinf-sec'>
                            <img width='20px' height='20px' src={lightbulb} alt=""/>
                            6 kilt idea
                        </div>
                    </div>
                    <div className='bookpage-aboutbook'>
                        <h1 className='booksum'>Об этой книге</h1>
                        <h2 className='booksummary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi culpa sed sint? </h2>
                        <div className='booktags'>
                            <div className='booktag'>
                                Personal growth
                            </div>
                            <div className='booktag'>
                                Culture & Society
                            </div>
                            <div className='booktag'>
                                Fiction
                            </div>
                            <div className='booktag'>
                                Mind & Philosophy
                            </div>
                        </div>
                    </div>
                    <section className='trends bookpage-similar'>
                        <div className='main-section-container'>
                            <h1 className='main-section-title'>Похожие книги</h1>
                            <p className='show-full'>Посмотреть все <img src={full} alt="full" width='16px' height='16px'/></p>
                        </div>
                        <div className='books-slider'>
                            <Book inf={{booktitle:'The good guy', author: 'Mark McCallister', listentime: '5m',readtime:'8m'}} img={book_1} />
                            <Book inf={{booktitle:'Explore your create..', author: 'Royryan Mercado', listentime: '15m',readtime:'15m'}} img={book_3}/>
                            <Book inf={{booktitle:'Norse mythology', author: 'Neil Gaiman', listentime: '5m',readtime:'8m'}} img={book_4}/>
                        </div>
                    </section>
                </main>
            </header>

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

export default Bookpage;