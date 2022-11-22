const Search = ({handleChange, searchValue}) => {
    return(
        <section className="search">
            <input
                placeholder="Search"
                type="text"
                value={searchValue}
                onChange={handleChange}
            />
        </section>
    )
}

export default Search