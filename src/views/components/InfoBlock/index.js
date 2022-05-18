import './style.css';

function InfoBlock({icon, text}) {
    return (
        <div className="info-block">
            <div className="info-block__icon">
                <img src={icon} alt="Information"/>
            </div>
            <div className="info-block__text">{text}</div>
        </div>
    );
}

export default InfoBlock;
