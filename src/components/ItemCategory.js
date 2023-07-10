import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const ItemCategory = ({ title, itemCards }) => {
  // const [addMessage, setAddMessage] = useState("ADD");
  const dispatch = useDispatch();
  const addFoodItem = (info) => {
    dispatch(addItem(info));
  }

  // const handleClick = () => {
    
  //   setAddMessage("ADDED!");
  //   setTimeout(() => {
  //     setAddMessage("ADD");
  //   }, 2000);
  // };
  
  return (
    <div className="w-1/2 mx-auto">
    <h1 className="font-extrabold text-2xl">{title + " " + "(" + itemCards.length + ")"}</h1>
    {
    itemCards.map((item) => {
        const info = item?.card?.info;
        console.log("info" + info);
        return <div key={info.id} className="flex w-full justify-center my-6">
            {/* left */}
            <div className="h-full w-8/12">
                <div className="flex">
                    <img src={info?.itemAttribute?.vegClassifier === "NONVEG" ? "https://img.icons8.com/fluency/20/null/non-vegetarian-food-symbol.png" : "https://img.icons8.com/color/20/null/vegetarian-food-symbol.png"}/>
                    <img className="ml-2" src={info?.ribbon?.text === "Bestseller" ? "https://img.icons8.com/fluency/20/null/star.png" : ""} alt="" />
                    <span className="ml-0.5 text-amber-500 font-semibold">{info?.ribbon?.text === "Bestseller" ? info?.ribbon?.text : ""}</span>
                </div>
                <h2 className="font-medium text-lg">{info.name}</h2>
                <h3 className="font-normal text-sm">₹ {info?.price !== undefined ? info?.price/100 : info?.defaultPrice/100}</h3>
                {/* <br /> */}
                <p className="text-[#282c3f73] text-sm font-light mt-7">{info.description}</p>
            </div>
            {/* right */}
            <div className="h-full w-4/12 relative">
                <img className="h-full rounded-lg" src={IMG_CDN_URL + info.imageId} alt={info.name} />
                <div className="w-full">
                    <button className="absolute bottom-0 left-1/4 rounded-lg border border-gray-400 text-green-500 px-8 mx-auto bg-white py-1" onClick={() => addFoodItem(info)}>ADD</button>    
                </div>
            </div>
        </div>
    })
    }
    </div>
  )
}

export default ItemCategory;