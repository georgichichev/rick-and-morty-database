import axios from "axios";

export const getItems = async (page, searchValue, endpoint) =>{
    const data = await axios.get(`https://rickandmortyapi.com/api/${endpoint}/?page=${page}&name=${searchValue}`);
    return data.data
}

export const getDetails = async (id) =>{
    const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return data.data
};
