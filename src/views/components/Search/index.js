import search from './img/search.png';
import './style.css';

function Search() {
    return (
        <div className="search">
            <div className="search__icon">
                <img src={search} alt="Search"/>
            </div>
            <form className="search__form">
                <label className="search__label">
                    <input type="text" className="search__input"/>
                </label>
            </form>
        </div>
    );
}

export default Search;
