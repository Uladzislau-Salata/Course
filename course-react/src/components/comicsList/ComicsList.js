import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';

const ComicsList = (props) => {

    const [comicsList, setComicsList] = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const { loading, error, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 9) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewComicsLoading(newComicsLoading => false);
        setOffset(offset => offset + 9);
        setComicsEnded(comicsEnded => ended);
    }

    function renderComics(arr) {
        const comics = arr.map((comic, i) => {
            let imgStyle = { 'objectFit': 'cover' };
            console.log(comic);
            return (
                <li
                    className="comics__item"
                    tabIndex={0}
                    key={comic.id}
                >
                    <img src={comic.thumbnail} alt={comic.title} className="comics__item-img" style={imgStyle} />
                    <div className="comics__item-name">{comic.title}</div>
                    <div className="comics__item-price">{comic.price}$</div>
                </li>
            )
        });
        return (
            <ul className="comics__grid">
                {comics}
            </ul>
        )
    }

    const comics = renderComics(comicsList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newComicsLoading ? <Spinner /> : null;


    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {comics}
            <button className="button button__main button__long"
                disabled={newComicsLoading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

// ComicsList.propTypes = {
//     onCharSelected: PropTypes.func.isRequired
// }

export default ComicsList;