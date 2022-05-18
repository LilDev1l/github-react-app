import './style.css';
import Profile from '../Profile';
import Repositories from '../Repositories';
import ReposNotFound from '../../pages/ReposNotFound';

export default function User({user}) {
    const {login: username, public_repos: totalRepos} = user;

    return (
        <div className="user">
            <div className="user__profile">
                <Profile user={user}/>
            </div>
            <div className="user__repositories">
                {shouldShowRepos(totalRepos)
                    ? <Repositories username={username} totalRepos={totalRepos}/>
                    : <ReposNotFound/>}
            </div>
        </div>
    );
}

function shouldShowRepos(totalRepos) {
    return totalRepos > 0
}
