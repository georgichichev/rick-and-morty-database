import {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {getItems} from "../../api/api.js";
import EpisodeCard from "./EpisodeCard/EpisodeCard.js";
import {useInfiniteQuery} from "@tanstack/react-query";
import Search from "../Search/Search.js";
import useDebounce from "../../hooks/useDebounce.js";

const Episodes = () => {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 600);

    const {
        data,
        status,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ['episodes', debouncedSearch],
        ({ pageParam = 1 }) => getItems(pageParam, debouncedSearch, 'episode'),
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
                <p className="data__status-text">Loading...</p>
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
                <p className="data__status-text">No results found.</p>
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
                        Episodes: {data.pages.reduce((count, current) => count + current.results.length, 0)}
                    </p>
                }
            >
                <section className="data">
                    {data.pages.map((page) => (
                        page.results.map(x => <EpisodeCard key={x.id} data={x}/>)
                    ))}
                </section>
            </InfiniteScroll>
        </>
    )
}

export default Episodes