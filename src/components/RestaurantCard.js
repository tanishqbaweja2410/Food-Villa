import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 style={{"margin": "10px", "margin-left": 0}}>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {/* <h4>{avgRating} stars</h4> */}
      <div class="_3Mn31">
        <div class="_9uwBC wY0my">
          <span class="icon-star _537e4">&nbsp;★</span>
          <span>{avgRating}</span>
        </div>
        <div>•</div>
        <div>{slaString}</div>
        <div>•</div>
        <div class="nVWSi">{costForTwoString}</div>
      </div>
    </div>
    // <div className="card-inner-container">
    //   <img className="card-image" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
    //   <div className="card-info-container">
    //     <h3 className="card-name">{name}</h3>
    //     <p className="card-cuisines">{cuisines.join(", ")}</p>
    //     <div className="card-rating-container">
    //       <p className="card-rating-text">{avgRating}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RestaurantCard;
