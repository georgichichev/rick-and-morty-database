const EpisodeCard = ({data}) => {
    return(
        <article className="card">
            <div className="card__info">
                <h2>{data.name}</h2>
                <label>Air Date:</label>
                <h3>{data.air_date}</h3>
                <label>Episode:</label>
                <h3>{data.episode}</h3>
            </div>
        </article>
    )
}

export default EpisodeCard