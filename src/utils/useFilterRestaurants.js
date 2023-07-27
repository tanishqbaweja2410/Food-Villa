import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";

const useFilterRestaurants = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        // API Call
        getRestaurants();
        console.log(allRestaurants);
    }, []);

    async function getRestaurants() {
        const data = await fetch(FETCH_RESTAURANT_URL);
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(allRestaurants);
    }

    return {allRestaurants, filteredRestaurants, setFilteredRestaurants};
}

export default useFilterRestaurants;


// json?.data?.cards[2]?.data?.data?.cards