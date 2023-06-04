import React, {useState} from 'react';
import './preferences.css'
import '../../index.css'

import CheckedGenre from '../../assets/checked.svg'
import UnCheckedGenre from '../../assets/unchecked.svg'
import {Link} from "react-router-dom";

const Preferences = () => {

    const [genres,setGenres] = useState([
        {title: 'фантастика', chosen: false},
        {title: 'роман', chosen: false},
        {title: 'короткие', chosen: false},
        {title: 'историческая фантастика', chosen: false},
        {title: 'фентези', chosen: false},
        {title: 'мистика', chosen: false},
        {title: 'хоррор', chosen: false},
        {title: 'детская литература', chosen: false},
        {title: 'триллер', chosen: false},
        {title: 'скай-фай', chosen: false},
        {title: 'романтика', chosen: false},
        {title: 'история', chosen: false},
        {title: 'поэма', chosen: false},
        {title: 'биография', chosen: false},
        {title: 'криминал', chosen: false},
        {title: 'автобиография', chosen: false},
        {title: 'книга рецептов', chosen: false},
    ])

    const Genre = (props) => {
        const choosegenre = () => {
            const genres_edit = [...genres]
            genres_edit.splice(props.index,1,{title: genres[props.index].title, chosen: !genres[props.index].chosen})
            setGenres([...genres_edit])
        }
        return (
            <button onClick={choosegenre} className={`genre ${props.genre.chosen ? 'genre-chosen' : ''}`}>
                {props.genre.title}
                <img src={props.genre.chosen ? CheckedGenre : UnCheckedGenre} alt="unchecked"/>
            </button>
        )
    }

    return (
        <div className='main preferences'>

            <h1 className='choosepref'>Выберите жанры</h1>

            <main className='genrechoose-frame'>
                <p className='showmore genrechoose-info2'>Выберите типы книг которые вы предпочитаете </p>
                {genres.map ( (info,index) => {
                    return(
                        <Genre genre={info} index={index}/>
                    )
                })}
                <p className='showmore'>Показать больше</p>
                <Link to={'/homepage'} className='systemlog-btn btn-green fontfix'>Продолжить</Link>
                <p className='genrechoose-info'>Выберите более 3 жанров чтобы продолжить</p>
            </main>
        </div>
    );
};

export default Preferences;