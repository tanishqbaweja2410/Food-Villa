import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  
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
