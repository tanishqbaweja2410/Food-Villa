import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";

const useFilterRestaurants = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // API Call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(FETCH_RESTAURANT_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return {allRestaurants, filteredRestaurants, setFilteredRestaurants};
}

export default useFilterRestaurants;