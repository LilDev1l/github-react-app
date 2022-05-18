import {useState} from 'react';
import './style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import User from '../../components/User';
import {ApiGitHub, Endpoints} from '../../../data/apiGit';
import Loader from '../../components/Loader';
import Init from '../Init';
import UserNotFound from '../UserNotFound';

export default function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const onloadUser = async (username) => {
        setLoading(true);

        const user = await ApiGitHub.get({url: Endpoints.user(username)});
        setUser(user);

        setLoading(false);
        setLoaded(true);
    }

    return (
        <div className="wrapper">
            <Header onLoadUser={onloadUser}/>
            <Main>
                {loading && <Loader/>}
                {shouldShowInit(loading, loaded) && <Init/>}
                {shouldShowUser(loading, loaded, user) && <User user={user}/>}
                {shouldShowUserNotFound(loading, loaded, user) && <UserNotFound/>}
            </Main>
        </div>
    );
}

function shouldShowInit(loading, loaded) {
    return !loading && !loaded;
}

function shouldShowUser(loading, loaded, user) {
    return !loading && loaded && user !== null;
}

function shouldShowUserNotFound(loading, loaded, user) {
    return !loading && loaded && user === null;
}