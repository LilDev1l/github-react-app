import './style.css';
import search from './img/search.png';
import InfoBlock from '../../components/InfoBlock';

function Init() {

    return (
        <div className="initial">
            <InfoBlock icon={search}
                       text='Start with searching a GitHub user'/>
        </div>
    );
}

export default Init;
