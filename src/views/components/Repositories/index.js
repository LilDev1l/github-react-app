import './style.css';
import Repository from '../Repository';
import Pagination from '../Pagination';

function Repositories() {
    return (
        <div className="repositories">
            <div className="repositories__tittle">Repositories (249)</div>
            <ul className="repositories__list">
                <li className="repositories__item">
                    <Repository/>
                </li>
            </ul>
            <div className="repositories__pagination">
                <Pagination/>
            </div>
        </div>
    );
}

export default Repositories;
