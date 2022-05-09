import './style.css';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Account from '../../components/Account';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Main>
                <Account/>
            </Main>
        </div>
    );
}

export default App;
