import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 style={{"margin": "10px", "margin-left": 0}}>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="_3Mn31">
        <div className="_9uwBC wY0my">
          <span className="icon-star _537e4">&nbsp;★</span>
          <span style={{paddingRight: "25%"}}>{avgRating}</span>
        </div>
        <div>•</div>
        <div>{slaString}</div>
        <div>•</div>
        <div class="nVWSi">{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
