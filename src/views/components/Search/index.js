import {useState} from 'react';
import search from './img/search.png';
import './style.css';

function Search(props) {
    const [username, setUsername] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if(username.trim()) {
            props.onLoadUser(username);
        }
    }

    return (
        <div className="search">
            <div className="search__icon">
                <img src={search} alt="Search"/>
            </div>
            <form className="search__form"
                  onSubmit={submitHandler}>
                <label className="search__label">
                    <input className="search__input" type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </label>
            </form>
        </div>
    );
}

export default Search;
