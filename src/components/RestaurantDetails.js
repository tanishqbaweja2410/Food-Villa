import { IMG_CDN_URL, ICON_CDN_URL } from "../constants";

const RestaurantDetails = ({ restaurantInfo }) => {
  return (
    <div className="heading bg-gray-800 text-white mb-8 py-5 text-center flex items-center justify-center">
      <img className="h-44 mr-10 rounded-md"
        src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}
        alt={restaurantInfo.name}
      />
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl mb-2">
          {restaurantInfo.name}
        </h1>
        <h5 className="font-bold text-md">
          {restaurantInfo.cuisines.join(", ")}
        </h5>
        <h5 className="font-bold text-md">
          {restaurantInfo.areaName}, {restaurantInfo.sla.lastMileTravelString}
        </h5>
        <br />
        <div className="flex items-center">
            <img className="mr-3 rounded-full" src={ICON_CDN_URL + restaurantInfo.expectationNotifiers[0].icon.imageId} alt="" />
            <h2 className="font-bold text-md">{restaurantInfo.feeDetails.message}</h2>
        </div>
        <h2></h2>
      </div>
    </div>
  );
};

export default RestaurantDetails;
