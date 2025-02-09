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
        className="relative"
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
        <div>
          <ul>
            {cartData.map((product: CartItem) => (
              <li key={product.id}>
                <CartProduct {...product} />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-full h-10 bg-primary rounded-full"
          onClick={showChildrenDrawer}
        >
          Two-level drawer
        </div>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </>
  );
};
