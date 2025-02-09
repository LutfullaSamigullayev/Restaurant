import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MenuProps } from 'antd';
import { Icons } from "@/icons";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedKey } from "@/store/Slices/menuSlice";
import { RootState } from "@/store/store";
import { MenuItem } from "@/types";

export const MenuFood = () => {
  const [collapsed, setCollapsed] = useState(false);
  const selectedKey = useSelector((state: RootState) => state.menu.selectedKey);
  const dispatch = useDispatch();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    dispatch(setSelectedKey(e.key));
  };


  const items: MenuItem[] = [
    {
      id: 1,
      key: "all",
      icon: <Icons.beef />,
      label: "Hammasi",
    },
    {
      id: 2,
      key: "beef",
      icon: <Icons.beef />,
      label: "Mol goshti",
    },
    {
      id: 3,
      key: "lamb",
      icon: <Icons.lamb />,
      label: "Qo`y goshti",
    },
    {
      id: 4,
      key: "chicken",
      icon: <Icons.chicken />,
      label: "To`vuq goshti",
    },
    {
      id: 5,
      key: "fish",
      icon: <Icons.fish />,
      label: "Baliq",
    },
    {
      id: 6,
      key: "fastfood",
      icon: <Icons.fastfood />,
      label: "Fast Food",
    },
  ];

  return (
    <div className="flex flex-col gap-y-1 py-2  w-fit h-full ">
        <Button type="text"  onClick={toggleCollapsed} className="flex items-center justify-center gap-x-2 rounded-full shadow-md">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          {!collapsed && "Menuni yopish"}
        </Button>
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items.map(item => ({
          ...item,
          icon: <div className="flex justify-center items-center">{item.icon}</div>
        }))}
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        className="bg-red-500"
/>
    </div>
  );
};
