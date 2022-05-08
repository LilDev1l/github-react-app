import './style.css';
import HeaderLogo from '../HeaderLogo';
import HeaderSearch from '../HeaderSearch';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <HeaderLogo/>
                <HeaderSearch/>
            </div>
        </div>
    );
}

export default Header;
