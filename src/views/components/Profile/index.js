import './style.css';
import NetworkProfile from '../NetworkProfile';

function Profile({user}) {
    return (
        <div className="profile">
            <div className="profile__photo">
                <img src={user.avatar_url} alt="Developer"/>
            </div>
            <div className="profile__name">{user.name}</div>
            <a href={user.html_url} target="_blank" className="profile__link"
               rel="noreferrer">{user.login}</a>
            <div className="profile__network">
                <NetworkProfile numberFollowers={user.followers}
                                numberFollowing={user.following}/>
            </div>
        </div>
    );
}

export default Profile;
