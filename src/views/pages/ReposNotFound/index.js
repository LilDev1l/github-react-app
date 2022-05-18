import './style.css';
import reposNotFound from './img/repo-not-found.png';
import InfoBlock from '../../components/InfoBlock';

function ReposNotFound() {

    return (
        <div className="repo-not-found">
                <InfoBlock icon={reposNotFound}
                           text='Repository list is empty'/>
        </div>
    );
}

export default ReposNotFound;
