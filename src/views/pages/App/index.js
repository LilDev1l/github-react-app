import {useState} from 'react';
import './style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Account from '../../components/Account';
import {ApiGitHub, Endpoints} from '../../../data/apiGit';

function App() {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    const loadData = async (username) => {
        const [user, repos] = await Promise.all([
            ApiGitHub.get({url: Endpoints.user(username)}),
            ApiGitHub.get({url: Endpoints.repos(username), query: {per_page: 10}})
        ]);
        setUser(user);
        setRepos(repos);
    }

    return (
        <div className="wrapper">
            <Header onloadData={loadData}/>
            <Main>

                {user && <Account user={user} repos={repos}/>}
            </Main>
        </div>
    );
}

export default App;
