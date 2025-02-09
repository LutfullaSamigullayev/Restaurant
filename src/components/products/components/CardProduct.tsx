import { Icons } from "@/icons";
import { addToCart, increment, decrement } from "@/store/Slices/cartSlice";
import { RootState } from "@/store/store";

import { ProductItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";

export const CardProduct = (product: ProductItem) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    dispatch(increment(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrement(product.id));
  };

  const cartData = useSelector((state: RootState) => state.cart.items);
  const filter = cartData.filter((item) => item.id === product.id);

  return (
    <div className="flex justify-between w-[400px] h-24 p-3 shadow-md rounded-lg">
      <div className="max-w-20 max-h-20 rounded-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-full transition-all duration-150 hover:scale-125 active:scale-75"
        />
      </div>
      <div className="flex flex-col basis-auto w-60">
        <h2 className="text-lg font-semibold truncate ">{product.name}</h2>
        <span className="text-lg font-semibold">{product.price}</span>
        <p className="text-sm text-gray-500 truncate ">{product.description}</p>
      </div>
      <div className="w-8 h-full flex flex-col justify-center items-center ">
        {filter.length === 1 ? (
          <div className="flex flex-col w-full h-full">
            <button
              onClick={handleIncrement}
              className="w-full h-full rounded-t-full border border-gray-400"
            >
              +
            </button>
            <p className="w-full border-l border-r border-gray-400 text-center select-none">
              {filter[0].quantity}
            </p>
            <button
              onClick={handleDecrement}
              className="w-full h-full  rounded-b-full border border-gray-400"
            >
              -
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="h-fit w-fit flex items-center justify-center border border-gray-400 rounded-full p-3"
          >
            <Icons.cart width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  );
};
