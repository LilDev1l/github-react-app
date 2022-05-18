import {useEffect, useState, useCallback} from 'react';
import './style.css';
import Pagination from '../Pagination';
import {ApiGitHub, Endpoints} from '../../../data/apiGit';
import Loader from '../Loader';
import RepositoriesBody from '../RepositoriesBody';
import {getPaginationInfo, getPageCount} from '../../../data/helpers';

const countReposOnPage = 4;

export default function Repositories({username, totalRepos}) {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const loadRepos = useCallback(async (page) => {
        setLoading(true);

        const repos = await ApiGitHub.get({
            url: Endpoints.repos(username),
            query: {page, per_page: countReposOnPage}
        });
        setRepos(repos);

        setLoading(false);
    }, [username]);

    const onChangeCurrentPage = (value) => {
        setCurrentPage(value)
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [username])
    useEffect(() => {
        loadRepos(currentPage)
    }, [currentPage, loadRepos])

    return (
        <div className="repositories">
            {loading && <Loader/>}
            {shouldShowReposBody(loading, repos) && <RepositoriesBody totalRepos={totalRepos}
                                                                      repos={repos}/>}
            <div className="repositories__pagination">
                <Pagination paginationInfo={getPaginationInfo(currentPage, countReposOnPage, totalRepos)}
                            pageCount={getPageCount(totalRepos, countReposOnPage)}
                            onChangeCurrentPage={onChangeCurrentPage}/>
            </div>
        </div>
    );
}

function shouldShowReposBody(loading, repos) {
    return !loading && repos.length !== 0;
}