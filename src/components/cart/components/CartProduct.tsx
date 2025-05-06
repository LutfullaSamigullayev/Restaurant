import { CartItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeToCart } from "@/store/Slices/cartSlice";
import { RootState } from "@/store/store";
import { Button } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

export const CartProduct = (product: CartItem) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrement(product.id));
  };

  const handleRemoveToCart = () => {
    dispatch(removeToCart(product.id));
  };

  const cartData = useSelector((state: RootState) => state.cart.items);
  const filter = cartData.filter((item) => item.id === product.id);
  const summ = filter[0].price * filter[0].quantity;

  return (
    <div className=" flex justify-between items-center gap-x-2 pb-2 w-full h-24 shadow-md rounded-lg p-2">
      <div className="grid grid-rows-3 w-8 h-full select-none rounded-full overflow-hidden bg-primary text-white font-bold">
        <button onClick={handleIncrement} className="cursor-pointer">
          <PlusOutlined style={{ color: "#fff" }} />
        </button>
        <p className="text-center">{filter[0].quantity}</p>
        <button onClick={handleDecrement} className="cursor-pointer">
          <MinusOutlined style={{ color: "#fff" }} />
        </button>
      </div>
      <div className="max-w-20 max-h-20 rounded-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-full transition-all duration-150 hover:scale-125 active:scale-75"
        />
      </div>
      <div className="flex flex-col basis-auto w-50 ">
        <h2 className="text-lg font-semibold truncate ">{product.name}</h2>
        <span className=""></span>
        <span className="text-lg font-semibold">
          {product.price / 1000}
          <span className="text-sm align-sub opacity-80">000</span> so‘m
        </span>

        <p className="text-sm text-gray-500 truncate ">{product.quantity} ta</p>
      </div>
      <div className="min-w-16 flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold">Jami</h3>
        <span className="text-lg font-semibold">
          {summ / 1000}
          <span className="text-sm align-sub opacity-70">000</span>
        </span>
        <span className="text-lg">so‘m</span>
      </div>
      <Button type="text" className="w-8" onClick={handleRemoveToCart}>
        <DeleteOutlined />
      </Button>
    </div>
  );
};
