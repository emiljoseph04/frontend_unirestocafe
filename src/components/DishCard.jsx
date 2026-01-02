import { useState } from "react";
import Counter from "./Counter";

const DishCard = ({ dish, onAddToCart, onRemoveFromCart }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
    onAddToCart();
  };

  const decrease = () => {
    if (count > 0) {
      setCount((count) => count - 1);
      onRemoveFromCart();
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow flex gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className={`border p-0.5 ${dish.dish_Type === 1 ? "border-green-600" : "border-red-600"}`}>
            <span className={`block h-2 w-2 rounded-full ${dish.dish_Type === 1 ? "bg-green-600" : "bg-red-600"}`}/>
          </div>

          <h3 className="font-semibold">{dish.dish_name}</h3>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">
          {dish.dish_description}
        </p>

        <div className="flex justify-between mt-2">
          <span className="font-semibold">
            SAR {dish.dish_price}
          </span>
          <span className="text-xs text-gray-400">
            {dish.dish_calories} calories
          </span>
        </div>

        {dish.dish_Availability ? (
          <>
            <div className="mt-3">
              <Counter
                value={count}
                onAdd={increase}
                onRemove={decrease}
              />
            </div>

            {dish.addonCat?.length > 0 && (
              <p className="text-xs text-red-500 mt-2">
                Customizations available
              </p>
            )}
          </>
        ) : (
          <p className="text-xs text-red-500 mt-2">Not available</p>
        )}
      </div>

      <img
        src={dish.dish_image}
        alt={dish.dish_name}
        className="h-20 w-20 rounded-lg object-cover"
      />
    </div>
  );
};

export default DishCard;
