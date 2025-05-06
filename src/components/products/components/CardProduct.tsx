import { addToCart, increment, decrement } from "@/store/Slices/cartSlice";
import { RootState } from "@/store/store";

import { ProductItem } from "@/types";
import { MinusOutlined, PlusOutlined, ShoppingOutlined } from "@ant-design/icons";
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
    <div className="flex justify-between w-[400px] h-28 p-3 shadow-md rounded-lg">
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
          <div className="grid grid-rows-3 rounded-full w-full h-full bg-primary text-white">
            <button
              onClick={handleIncrement}
              className="cursor-pointer w-full h-full rounded-t-full hover:bg-darkPrimary"
            >
          <PlusOutlined />

            </button>
            <div className="flex items-center justify-center text-center select-none">
              {filter[0].quantity}
            </div>
            <button
              onClick={handleDecrement}
              className="cursor-pointer w-full h-full  rounded-b-full hover:bg-darkPrimary"
            >
                <MinusOutlined />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="h-fit w-fit flex items-center text-primary justify-center border border-gray-400 rounded-full p-3 hover:text-white hover:bg-primary hover:border-none"
          >
            {/* <Icons.cart3 /> */}
            <ShoppingOutlined />
          </button>
        )}
      </div>
    </div>
  );
};
