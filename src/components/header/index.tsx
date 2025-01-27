import { Logo} from "./components";

export const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 bg-white shadow-md">
        <Logo />
    </div>
  );
};
