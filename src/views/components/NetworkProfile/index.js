import './style.css';
import followers from './img/followers.png';
import following from './img/following.png';


function NetworkProfile() {
    return (
        <div className="network-profile">
            <div className="network-profile__item network-profile__item_followers">
                <div className="network-profile__icon">
                    <img src={followers} alt="Followers"/>
                </div>
                <div className="network-profile__text">65.8k followers</div>
            </div>
            <div className="network-profile__item network-profile__item_following">
                <div className="network-profile__icon">
                    <img src={following} alt="Following"/>
                </div>
                <div className="network-profile__text">171 following</div>
            </div>
        </div>
    );
}

export default NetworkProfile;
