import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantDishes from "./RestaurantDishes";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const restaurantInfo = restaurant?.cards[0]?.card?.card?.info;
  let restaurantMenuItems = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  if(restaurantMenuItems === undefined) {
    restaurantMenuItems = restaurant?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  }
  // console.log(restaurant);

  

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menu grid grid-cols-3 gap-x-10 gap-y-5 font-poppins">
      <RestaurantDetails restaurantInfo={restaurantInfo}/>
      <RestaurantDishes restaurantMenuItems={restaurantMenuItems}/>
      {/* {Object.values(restaurant?.menu?.items).map((item) => (
        <div
          key={item.id}
          className="food-items col-span-1 relative rounded-2xl shadow-md overflow-hidden mx-5 h-[464px]"
        >
          <img
            src={IMG_CDN_URL + item?.cloudinaryImageId}
            alt={item.name}
            className="w-full object-cover h-[260px] rounded-t-lg"
          />
          <div className="py-5 px-2.5 h-auto">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-base sm:text-lg md:text-xl">
                {item.name}
              </h5>
              <h5 className="font-semibold text-base sm:text-lg md:text-xl">
                ₹{item.price / 100}
              </h5>
            </div>
            <p className="text-sm sm:text-base font-normal text-gray-700 mb-4">
              {item.description}
            </p>
            <button className="bg-gray-800 text-white font-semibold text-base sm:text-lg lg:text-xl py-2 px-4 rounded-md">
              Add To Cart
            </button>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default RestaurantMenu;

