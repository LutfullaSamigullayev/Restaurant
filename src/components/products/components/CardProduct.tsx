import { Icons } from "@/icons";
import { ProductItem } from "@/types";

export const CardProduct = (props: ProductItem) => {
  return (
    <div className="flex justify-between w-[400px] h-24 p-3 shadow-md rounded-lg">
      <div className="max-w-20 max-h-20 rounded-full overflow-hidden">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full transition-all duration-150 hover:scale-125 active:scale-75"
        />
      </div>
      <div className="flex flex-col basis-auto w-60">
        <h2 className="text-lg font-semibold truncate ">{props.name}</h2>
        <span className="text-lg font-semibold">{props.price}</span>
        <p className="text-sm text-gray-500 truncate ">{props.description}</p>
      </div>
      <div className="w-8 h-full flex flex-col justify-center items-center ">
        <button className="h-fit w-fit flex items-center justify-center  border border-gray-400 rounded-full p-3 ">
          <Icons.cart width={20} height={20} />
        </button>
        {/* <div className="flex flex-col w-full h-full">
          <button className="w-full h-full rounded-t-full border border-gray-400">
            +
          </button>
          <p className="w-full border-l border-r border-gray-400 text-center ">
            1
          </p>
          <button className="w-full h-full  rounded-b-full border border-gray-400">
            -
          </button>
        </div> */}
      </div>
    </div>
  );
};
