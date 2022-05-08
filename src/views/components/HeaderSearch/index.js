import search from './img/search.png';
import './style.css';

function HeaderSearch() {
    return (
        <div className="header__search search-header">
            <div className="search-header__icon">
                <img src={search} alt="Search"/>
            </div>
            <form className="search-header__form">
                <label className="search-header__label">
                    <input type="text" className="search-header__input"/>
                </label>
            </form>
        </div>
    );
}

export default HeaderSearch;
