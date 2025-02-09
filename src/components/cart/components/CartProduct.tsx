import { CartItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeToCart } from "@/store/Slices/cartSlice";
import { RootState } from "@/store/store";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";


export const CartProduct = (product: CartItem) => {

    const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrement(product.id));
  };

  const handleRemoveToCart = () => {
    dispatch(removeToCart(product.id))
  }

    const cartData = useSelector((state: RootState) => state.cart.items);
    const filter = cartData.filter((item) => item.id === product.id);
    const summ = filter[0].price * filter[0].quantity

  return (
    <div className="flex justify-between items-center gap-x-2 pb-2 w-full h-24 ">
      <div className="w-8 h-full flex flex-col justify-center items-center ">
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
      <div className="max-w-20 max-h-20 rounded-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-full transition-all duration-150 hover:scale-125 active:scale-75"
        />
      </div>
      <div className="flex flex-col basis-auto w-50 border">
        <h2 className="text-lg font-semibold truncate ">{product.name}</h2>
        <span className="text-lg font-semibold">{product.price}</span>
        <p className="text-sm text-gray-500 truncate ">{product.quantity} ta</p>
      </div>
      <div className="flex gap-x-2">
        <p className="text-xl">{summ}</p>
        <Button type="primary" onClick={handleRemoveToCart}><DeleteOutlined /></Button>
        </div>
    </div>

  );
};
