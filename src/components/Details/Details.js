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
        <div className="detailsContainer">
            <img src={data.image} alt={"detailsImage"}/>
            <div className="detailsInfo">
                <h1>{data.name}</h1>
                <div className="statusBox">
                    <span className={`details__icon card__icon--${data.status.toLowerCase()}`}/>
                    <h4>{data.status} - {data.species}</h4>
                </div>
                <label>Gender:</label>
                <h3>{data.gender}</h3>
                <label>Origin:</label>
                <h3>{data.origin.name}</h3>
                <label>Location:</label>
                <h3>{data.location.name}</h3>
                <label>Episodes:</label>
                <h3>{data.episode.length}</h3>
            </div>
        </div>
    )
}

export default Details