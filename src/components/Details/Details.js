import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getDetails} from "../../api/api.js";

const Details = () => {
    const { id } = useParams();

    const {data, status} = useQuery(
        ['character', id],
        () => getDetails(id)
    );

    if (status === 'loading'){
        return (
            <p className="statusText">Loading...</p>
        )
    }

    if (status === 'error'){
        return (
            <p className="statusText">No results found.</p>
        )
    }

    return(
        <div className="details">
            <img className="details__img" src={data.image} alt={"detailsImage"}/>
            <div>
                <h2 className="details__title">{data.name}</h2>
                <div className="details__status-box">
                    <span className={`details__status-icon details__status-icon--${data.status.toLowerCase()}`}/>
                    <h4 className="details__status-text">{data.status} - {data.species}</h4>
                </div>
                <label className="details__label">Gender:</label>
                <h3 className="details__subtitle">{data.gender}</h3>
                <label className="details__label">Origin:</label>
                <h3 className="details__subtitle">{data.origin.name}</h3>
                <label className="details__label">Location:</label>
                <h3 className="details__subtitle">{data.location.name}</h3>
                <label className="details__label">Episodes:</label>
                <h3 className="details__subtitle">{data.episode.length}</h3>
            </div>
        </div>
    )
}

export default Details