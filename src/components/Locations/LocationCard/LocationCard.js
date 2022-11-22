const LocationCard = ({data}) => {
    return(
        <article className="card">
            <div className="card__info">
                <h2>{data.name}</h2>
                <label>Type:</label>
                <h3>{data.type}</h3>
                <label>Dimension:</label>
                <h3>{data.dimension}</h3>
            </div>
        </article>
    )
}

export default LocationCard