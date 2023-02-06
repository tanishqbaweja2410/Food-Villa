import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.6389315&lng=77.08668109999999&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div class="menu">
      <div class="heading">
        <h1>{restaurant.name}</h1>
        <h3>&mdash; MENU &mdash; </h3>
      </div>
      {Object.values(restaurant?.menu?.items).map((item) => (
        <div key={item.id} className="food-items">
          <img src={IMG_CDN_URL + item?.cloudinaryImageId} alt={item.name} />
          <div class="details">
            <div class="details-sub">
              <h5>{item.name}</h5>
              <h5 class="price"> ₹{item.price / 100} </h5>
            </div>
            <p>{item.description}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
