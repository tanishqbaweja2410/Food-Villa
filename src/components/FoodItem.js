import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, price, imageId }) => {
  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(removeItem(name));
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center p-2.5 m-2.5 w-4/5 h-[100px] rounded-[10px] overflow-hidden hover:cursor-pointer, hover:shadow-[2px_2px_10px_#ccc;]">
      <img
        src={IMG_CDN_URL + imageId}
        alt="restaurant img"
        className="h-24 object-cover rounded-[10px] border border-green-400"
      />
      <h2 className="m-2.5 w-1/2 font-montser font-bold text-2xl leading-none">
        {name}
      </h2>
      <div className="flex text-2xl w-1/4">
        <button
          className="m-2"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
        <h2 className="m-2">{quantity}</h2>
        <button
          className="m-2"
          onClick={() => {
            if(quantity > 1) setQuantity(quantity - 1);
            else if(quantity == 1) handleClearItem();
          }}
        >
          -
        </button>
      </div>
      <h2 className="m-2.5 font-montser font-bold text-2xl leading-none">
        ₹{price === undefined ? 100 * quantity : (price / 100) * quantity}
      </h2>
    </div>
  );
};

export default FoodItem;
