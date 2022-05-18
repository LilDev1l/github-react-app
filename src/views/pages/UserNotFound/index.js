import './style.css';
import userNotFound from './img/user-not-found.png';
import InfoBlock from '../../components/InfoBlock';

function UserNotFound() {

    return (
        <div className="user-not-found">
            <InfoBlock icon={userNotFound}
                       text='User not found'/>
        </div>
    );
}

export default UserNotFound;
