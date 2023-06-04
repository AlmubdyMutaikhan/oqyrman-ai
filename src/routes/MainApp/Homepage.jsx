import React, {useRef, useState} from 'react';
import './mainApp.css'
import trends from '../../assets/trends.svg'
import min from '../../assets/5min.svg'
import short from '../../assets/short.svg'
import full from '../../assets/full.svg'
import read from '../../assets/read.svg'
import book_1 from '../../assets/book_1.png'
import book_2 from '../../assets/book_2.png'
import book_3 from '../../assets/book_3.png'
import book_4 from '../../assets/book_4.png'
import play from '../../assets/play.svg'
import forward from '../../assets/forward.svg'
import home_active from '../../assets/home_active.svg'
import search from '../../assets/search.svg'
import library from '../../assets/library.svg'
import {Link} from "react-router-dom";

const Homepage = () => {

    const Fyp = (props) => {

        return (
            <button className={`fyp genre ${props.genre.chosen ? 'genre-chosen' : ''}`}>
                <img src={props.genre.logo} alt="unchecked"/>
                {props.genre.title}

            </button>
        )
    }
    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    const Book = (props) => {
        return (
            <Link onClick={scrollToTop} to={props.link} className='book'>
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
        <div className='main'>
            <div className='mainApp'>
                <header>
                    <h1 className='homepage-apptitle'>OQYRMAN AI</h1>
                    <section className='quotesection'>
                        <h1 className='quote'>"Creativity is the life of the creative minds"</h1>
                        <p className='quotetitle'>quote of the day</p>
                    </section>
                    <ul className='stories_slider'>
                        <li>
                            <div className='stories_img_container'>
                                <img src={book_2} className='stories_img' />
                            </div>
                            <h2 className='stories-author'>Michael Doug...</h2>
                        </li>
                        <li>
                            <div className='stories_img_container'>
                                <img src={book_3} className='stories_img' />
                            </div>
                            <h2 className='stories-author'>Royryan Merc...</h2>
                        </li>
                        <li>
                            <div className='stories_img_container'>
                                <img src={book_4} className='stories_img' />
                            </div>
                            <h2 className='stories-author'>Neil Gaiman</h2>
                        </li>
                        <li>
                            <div className='stories_img_container'>
                                <img src={book_1} className='stories_img' />
                            </div>
                            <h2 className='stories-author'>Mark McCallister</h2>
                        </li>
                        <li>
                            <div className='stories_img_container'>
                                <img src={book_2} className='stories_img' />
                            </div>
                            <h2 className='stories-author'>Michael Doug...</h2>
                        </li>
                    </ul>

                    <ul className='fyp-slider'>
                        <li>
                            <Fyp genre={{chosen:true,title:'Тренды',logo:trends}}/>
                        </li>
                        <li>
                            <Fyp genre={{chosen:false,title:'5-минутные книги',logo:min}}/>
                        </li>
                        <li>
                            <Fyp genre={{chosen:false,title:'Короткие',logo:short}}/>
                        </li>
                    </ul>
                    <section className='full-access'>
                        <h2 className='full-access-info'>Получите полный доступ <br/> всего за</h2>
                        <h2 className='full-access-price'>$9.99</h2>
                        <p className='privacy-policy'>
                            Политика конф.
                        </p>
                    </section>
                </header>
                <main>
                    <section className='trends'>
                        <div className='main-section-container'>
                            <h1 className='main-section-title'>Трендовые</h1>
                            <p className='show-full'>Посмотреть все <img src={full} alt="full" width='16px' height='16px'/></p>
                        </div>
                        <div className='books-slider'>
                            <Book inf={{booktitle:'The good guy', author: 'Mark McCallister', listentime: '5m',readtime:'8m'}} img={book_1} />
                            <Book inf={{booktitle:'Futurama', author: 'Michael Douglas jr.', listentime: '12m',readtime:'9m'}} img={book_2} link={'/books/1000002'}/>
                            <Book inf={{booktitle:'Explore your create..', author: 'Royryan Mercado', listentime: '15m',readtime:'15m'}} img={book_3}/>
                            <Book inf={{booktitle:'Norse mythology', author: 'Neil Gaiman', listentime: '5m',readtime:'8m'}} img={book_4}/>
                        </div>
                    </section>
                    <section className='trends'>
                        <div className='main-section-container'>
                            <h1 className='main-section-title'>Для вас</h1>
                            <p className='show-full'>Посмотреть все <img src={full} alt="full" width='16px' height='16px'/></p>
                        </div>
                        <div className='books-slider'>
                            <Book inf={{booktitle:'Futurama', author: 'Michael Douglas jr.', listentime: '12m',readtime:'9m'}} img={book_2} link={'/books/1000002'}/>
                            <Book inf={{booktitle:'Norse mythology', author: 'Neil Gaiman', listentime: '5m',readtime:'8m'}} img={book_4}/>
                            <Book inf={{booktitle:'Explore your create..', author: 'Royryan Mercado', listentime: '15m',readtime:'15m'}} img={book_3}/>
                            <Book inf={{booktitle:'The good guy', author: 'Mark McCallister', listentime: '5m',readtime:'8m'}} img={book_1}/>

                        </div>
                    </section>
                    <section className='trends'>
                        <div className='main-section-container'>
                            <h1 className='main-section-title'>5 минутные книги</h1>
                            <p className='show-full'>Посмотреть все <img src={full} alt="full" width='16px' height='16px'/></p>
                        </div>
                        <div className='books-slider'>
                            <Book inf={{booktitle:'Norse mythology', author: 'Neil Gaiman', listentime: '5m',readtime:'8m'}} img={book_4}/>
                            <Book inf={{booktitle:'The good guy', author: 'Mark McCallister', listentime: '5m',readtime:'8m'}} img={book_1}/>
                        </div>
                    </section>
                </main>
            </div>

            <footer className='mainFooter'>
                <Link to={'/books/1000002/audio'}>
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
                </Link>
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

export default Homepage;