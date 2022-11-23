const LocationCard = ({data}) => {
    return(
        <article className="card">
            <div className="card__info">
                <h2 className="card__title">{data.name}</h2>
                <label className="card__label">Type:</label>
                <h3 className="card__subtitle">{data.type}</h3>
                <label className="card__label">Dimension:</label>
                <h3 className="card__subtitle">{data.dimension}</h3>
            </div>
        </article>
    )
}

export default LocationCard