const EpisodeCard = ({data}) => {
    return(
        <article className="card">
            <h2 className="card__episode-number">{data.id}</h2>
            <div className="card__info">
                <h3 className="card__title">{data.name}</h3>
                <label className="card__label">Air Date:</label>
                <h4 className="card__subtitle">{data.air_date}</h4>
                <label className="card__label">Episode:</label>
                <h4 className="card__subtitle">{data.episode}</h4>
            </div>
        </article>
    )
}

export default EpisodeCard