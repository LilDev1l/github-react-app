import './style.css';
import followersImg from './img/followers.png';
import followingImg from './img/following.png';
import {formattedNumber} from '../../../data/helpers';


function NetworkProfile({numberFollowers, numberFollowing}) {
    return (
        <div className="network-profile">
            <div className="network-profile__item network-profile__item_followers">
                <div className="network-profile__icon">
                    <img src={followersImg} alt="Followers"/>
                </div>
                <div className="network-profile__text">{formattedNumber(numberFollowers)} followers</div>
            </div>
            <div className="network-profile__item network-profile__item_following">
                <div className="network-profile__icon">
                    <img src={followingImg} alt="Following"/>
                </div>
                <div className="network-profile__text">{formattedNumber(numberFollowing)} following</div>
            </div>
        </div>
    );
}

export default NetworkProfile;
