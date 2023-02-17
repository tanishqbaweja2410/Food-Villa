import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useFilterRestaurants from "../utils/useFilterRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useFilterRestaurants();

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center mb-5 justify-center">
        <input
          type="text"
          className="w-[30%] p-3 rounded-md border-none text-lg mr-2.5 bg-[#f5f5f5] leading-normal"
          placeholder="Search Restaurants .🍔.🍕.🍟.🥙.🥪.🍎.🧇."
          value={searchText}
          onChange={(e) => {
            // e.target.value => whatever you write in it
            setSearchText(e.target.value);
          }}
        />
        <button
          className="w-[10%] p-3 bg-[#333] text-[#fff] rounded-md border-none text-lg font-semibold cursor-pointer hover:bg-[#555] leading-normal"
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
      <div className="flex flex-wrap justify-center">
        {/* map in jsx : - */}
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Found!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
