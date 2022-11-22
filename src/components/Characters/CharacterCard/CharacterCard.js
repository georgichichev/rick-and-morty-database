import {Link} from "react-router-dom";

const CharacterCard = ({data}) => {
    return(
        <article className="card">
            <img src={data.image} alt={"cardImage"} className="card__img"/>
            <div className="card__info">
                <Link to={`/details/characters/${data.id}`}>{data.name}</Link>
                <div>
                    <span className={`card__icon card__icon--${data.status.toLowerCase()}`}></span>
                    <h4>{data.status} - {data.species}</h4>
                </div>
                <label>Last known location:</label>
                <h3>{data.location.name}</h3>
                <label>First seen in:</label>
                <h3>{data.origin.name}</h3>
            </div>
        </article>
    )
}

export default CharacterCard