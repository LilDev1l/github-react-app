import './style.css';

function Repository({repo}) {
    return (
        <div className="repository">
            <a className="repository__tittle" href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
            <div className="repository__description">{repo.description}</div>
        </div>
    );
}

export default Repository;
