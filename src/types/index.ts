import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuItem {
  id: number;
  key: string;
  icon: JSX.Element;
  label: string;
}

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface MenuState {
  selectedKey: string;
}

export interface CartItem extends ProductItem {
  quantity: number
}