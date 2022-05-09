import './style.css';
import logo from './img/logo.svg';
import Search from '../Search';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <a href="#" className="header__logo">
                    <img src={logo} alt="Logo"/>
                </a>
                <div className="header__search">
                    <Search/>
                </div>
            </div>
        </div>
    );
}

export default Header;
