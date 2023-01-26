import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    // previous
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>

    // new
    // <div className="card">
    //   <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
    //   <h2>{name}</h2>
    //   <p>{cuisines.join(", ")}</p>
    //   <p>{avgRating} stars</p>
    // </div>
  );
};

export default RestaurantCard;
