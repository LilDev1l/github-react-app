import {Fragment} from 'react';
import './style.css';
import Repository from '../Repository';

function RepositoriesBody({totalRepos, repos}) {
    return (
        <Fragment>
            <div className="repositories__tittle">Repositories ({totalRepos})</div>
            <ul className="repositories__list">
                {repos.map((repo) => {
                    return <li className="repositories__item" key={repo.id}>
                        <Repository repo={repo}/>
                    </li>
                })}
            </ul>
        </Fragment>
    );
}

export default RepositoriesBody;