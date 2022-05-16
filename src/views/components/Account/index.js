import './style.css';
import Profile from '../Profile';
import Repositories from '../Repositories';

function Account({user, repos}) {
    return (
        <div className="account">
            <div className="account__container">
                <div className="account__profile">
                    <Profile user={user}/>
                </div>
                <div className="account__repositories">
                    <Repositories repos={repos}
                                  totalRepos={user.public_repos}/>
                </div>
            </div>
        </div>
    );
}

export default Account;
