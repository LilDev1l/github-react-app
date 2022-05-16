import './style.css';
import Repository from '../Repository';
import Pagination from '../Pagination';

function Repositories({repos, totalRepos}) {
    return (
        <div className="repositories">
            <div className="repositories__tittle">Repositories ({totalRepos})</div>
            <ul className="repositories__list">
                {
                    repos.map((repo) => {
                            return <li className="repositories__item" key={repo.id}>
                                <Repository repo={repo}/>
                            </li>
                        }
                    )
                }
            </ul>
            <div className="repositories__pagination">
                <Pagination totalRepos={totalRepos}/>
            </div>
        </div>
    );
}

export default Repositories;
