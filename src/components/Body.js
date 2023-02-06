import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper";
import useFilterRestaurants from "../utils/useFilterRestaurants";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {allRestaurants, filteredRestaurants, setFilteredRestaurants} = useFilterRestaurants();
  
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search Restaurants .🍔.🍕.🍟.🥙.🥪.🍎.🧇."
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in it
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state -> restaurants variable
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {/* map in jsx : - */}
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Found!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
