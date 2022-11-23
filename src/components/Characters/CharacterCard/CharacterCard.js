import {Link} from "react-router-dom";

const CharacterCard = ({data}) => {
    return(
        <article className="card">
            <img src={data.image} alt={"cardImage"} className="card__img"/>
            <div className="card__info">
                <Link
                    to={`/details/characters/${data.id}`}
                    className="card__link"
                >
                    {data.name}
                </Link>
                <div>
                    <span className={`card__status-icon card__status-icon--${data.status.toLowerCase()}`}></span>
                    <h4 className="card__status-text">{data.status} - {data.species}</h4>
                </div>
                <label className="card__label">Last known location:</label>
                <h3 className="card__subtitle">{data.location.name}</h3>
                <label className="card__label">First seen in:</label>
                <h3 className="card__subtitle">{data.origin.name}</h3>
            </div>
        </article>
    )
}

export default CharacterCard