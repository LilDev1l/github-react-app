import './style.css';
import logo from './img/logo.svg';
import Search from '../Search';

function Header(props) {
    return (
        <div className="header">
            <div className="header__container">
                <a href="/" className="header__logo">
                    <img src={logo} alt="Logo"/>
                </a>
                <div className="header__search">
                    <Search {...props}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
