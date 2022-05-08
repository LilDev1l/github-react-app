import logo from './img/logo.svg';
import './style.css';

function HeaderLogo() {
    return (
        <a href="#" className="header__logo">
            <img src={logo} alt="Logo"/>
        </a>
    );
}

export default HeaderLogo;
