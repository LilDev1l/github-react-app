import './style.css';
import Profile from '../Profile';
import Repositories from '../Repositories';

function Account() {
    return (
        <div className="account">
            <div className="account__container">
                <div className="account__profile">
                    <Profile/>
                </div>
                <div className="account__repositories">
                    <Repositories/>
                </div>
            </div>
        </div>
    );
}

export default Account;
