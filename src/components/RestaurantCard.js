import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="flex flex-col p-2.5 m-2.5 w-[300px] h-[400px] rounded-[10px] overflow-hidden hover:cursor-pointer, hover:shadow-[2px_2px_10px_#ccc;]">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant img"
        className="w-full h-[200px] object-cover rounded-[10px]"
      />
      <h2 className="m-2.5 ml-0 font-montser font-bold text-2xl leading-none">
        {name}
      </h2>
      <h3 className="text-[#6f6f6f] text-[15px] leading-[22px] font-normal self-stretch font-poppin">
        {cuisines.join(", ")}
      </h3>
      <div className="flex items-center mt-[18px] text-[12px] justify-between text-[#535665] w-full">
        <div className="h-5 w-[43px] py-0 px-[5px] font-normal flex items-center text-white bg-[#48c479]">
          <span className="font-normal not-italic normal-nums leading-none transform-none font-[icomoon] text-[10px] mr-1 relative top-[-1px]">
            &nbsp;★
          </span>
          <span className="pr-[25%]">{avgRating}</span>
        </div>
        <div>•</div>
        <div>{slaString}</div>
        <div>•</div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
