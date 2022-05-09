import back from './img/back.png';
import forward from './img/forward.png';
import './style.css';

function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__info">5-8 of 249 items</div>
            <ul className="pagination__pages">
                <a href="#" className="pagination__navigate pagination__navigate_back">
                    <img src={back} alt="Back"/>
                </a>

                <li className="page"><a href="#" className="page__link">1</a></li>
                <li className="page page_current"><a href="#" className="page__link">2</a></li>
                <li className="page"><a href="#" className="page__link">3</a></li>
                <li className="page">...</li>
                <li className="page"><a href="#" className="page__link">10</a></li>

                <a href="#" className="pagination__navigate pagination__navigate_forward">
                    <img src={forward} alt="Forward"/>
                </a>
            </ul>
        </div>
    );
}

export default Pagination;
