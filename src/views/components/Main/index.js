import './style.css';

function Main({children, ...props}) {
    return (
        <main className="main">
            {children}
        </main>
    );
}

export default Main;
