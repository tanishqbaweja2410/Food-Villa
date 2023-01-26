import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  // console.log(searchText);
  return filteredRestaurants;
}

const Body = () => {
  // let searchTxt = "KFC";
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search Restaurants .🍔.🍕.🍟.🥙.🥪.🍎.🧇."
          value={searchText}
          onChange={(e) => {
            // searchTxt = e.target.value;
            // console.log(searchTxt);
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            // console.log(restaurants);
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {/* map in jsx : - */}
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
