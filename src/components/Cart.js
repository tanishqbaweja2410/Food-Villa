import { useSelector } from "react-redux";
import emptyCart from "../assets/img/emptyCart.png";
import { Link } from "react-router-dom";
import FoodItem from "./foodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return cartItems.length == 0 ? (
    <div className="w-full h-[567px] flex flex-col items-center">
      <img className="h-[400px] w-[450px]" src={emptyCart} alt="" />
      <h1 className="text-lg text-[#535665] font-semibold mb-2">
        Your cart is empty
      </h1>
      <h2 className="text-[#7e808c] text-sm font-thin mb-6">
        You can go to home page to view more restaurants
      </h2>
      <Link to="/">
        <button className=" p-3 bg-[#333] text-[#fff] rounded-md hover:bg-[#555] font-semibold text-lg">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      {cartItems.map(item => <FoodItem key={item.id} {...item}/>)}
      {/* <FoodItem {...cartItems[0]}/> */}
    </div>
  );
};

export default Cart;
