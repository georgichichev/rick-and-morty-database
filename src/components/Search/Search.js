const Search = ({handleChange, searchValue}) => {
    return(
        <section className="search">
            <input
                className="search__input"
                placeholder="Search"
                type="text"
                value={searchValue}
                onChange={handleChange}
            />
        </section>
    )
}

export default Search