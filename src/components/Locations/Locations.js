import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {getItems} from "../../api/api.js";
import LocationCard from "./LocationCard/LocationCard.js";
import {useInfiniteQuery} from "@tanstack/react-query";
import Search from "../Search/Search.js";
import useDebounce from "../../hooks/useDebounce.js";

const Locations = () => {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 600);

    const {
        data,
        status,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ['locations', debouncedSearch],
        ({ pageParam = 1 }) => getItems(pageParam, debouncedSearch, 'location'),
        {
            getNextPageParam: (lastPage) => lastPage?.info?.next?.split('page=')[1],
            refetchOnWindowFocus: false
        }
    );

    const handleChange = (e) =>{
        setSearchValue(e.target.value);
    };

    if (status === 'loading'){
        return (
            <>
                <Search
                    handleChange={handleChange}
                    searchValue={searchValue}
                />
                <p className="statusText">Loading...</p>
            </>
        )
    }

    if (status === 'error'){
        return (
            <>
                <Search
                    handleChange={handleChange}
                    searchValue={searchValue}
                />
                <p className="statusText">No results found.</p>
            </>
        )
    }

    return (
        <>
            <Search
                handleChange={handleChange}
                searchValue={searchValue}
            />
            <InfiniteScroll
                dataLength={data.pages.length}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p className="data__footer">
                        Locations: {data.pages.reduce((count, current) => count + current.results.length, 0)}
                    </p>
                }
            >
                <section className="data">
                    {data.pages.map((page) => (
                        page.results.map(x => <LocationCard key={x.id} data={x}/>)
                    ))}
                </section>
            </InfiniteScroll>
        </>
    )
}

export default Locations