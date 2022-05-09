import './style.css';
import photo from './img/photo.png';
import NetworkProfile from '../NetworkProfile';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__photo">
                <img src={photo} alt="Developer"/>
            </div>
            <div className="profile__name">Dan Abramov</div>
            <a href="https://github.com/gaearon" target="_blank" className="profile__link" rel="noreferrer">gaearon</a>
            <div className="profile__network">
                <NetworkProfile/>
            </div>
        </div>
    );
}

export default Profile;
