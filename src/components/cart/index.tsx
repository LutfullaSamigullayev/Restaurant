import { Icons } from "@/icons";
import { useState } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Drawer } from "antd";
import { CartItem } from "@/types";
import { CartProduct } from "./components";
import { CloseOutlined } from "@ant-design/icons";

export const CartModal = () => {
  // const [modalOpen, setModalOpen] = useState(false)

  const cartData = useSelector((state: RootState) => state.cart.items);
  const total = cartData.reduce((a, b) => a + b.quantity, 0);
  console.log(cartData);

  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <div
        onClick={showDrawer}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-y-2 items-center bg-primary font-medium p-2 rounded-bl-lg rounded-tl-lg select-none"
      >
        <div className="flex items-center gap-x-1 text-white">
          <Icons.cart2 fill="white" width={20} height={20} />
          <p>{total} Items</p>
        </div>
        <div className="rounded-md px-2 py-1 bg-white text-primary text-sm">
          $36.90
        </div>
      </div>
      <Drawer
        className="cart_body"
        title={
          <div className="flex justify-between items-center w-full">
            <span>Shopping Cart</span>
            <CloseOutlined
              className="text-lg cursor-pointer"
              onClick={onClose}
            />
          </div>
        }
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <div className="">
          <div
            className=" overflow-y-auto pt-2 px-4"
            style={{ maxHeight: "calc(92vh - 56px)" }}
          >
            <ul>
              {cartData.map((product: CartItem) => (
                <li key={product.id}>
                  <CartProduct {...product} />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="w-full h-14 fixed bottom-0"
            onClick={showChildrenDrawer}
          >
            <div className="w-[500px] h-full px-4 py-2 flex justify-center items-center ">
              <button className="w-full h-full flex items-center justify-between p-1 pl-4 font-bold bg-primary rounded-full">
                <span className="text-white">Continue to Payment</span>
                <span className="flex items-center h-full px-2 rounded-full bg-white text-primary">
                  95000
                </span>
              </button>
            </div>
          </div>
        </div>
        <Drawer
          title="Buyurtma berish"
          width={520}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >

          {/* <Payment /> */}
              Bu yerda to'lov qismi bo'ladi
        </Drawer>
      </Drawer>
    </>
  );
};
