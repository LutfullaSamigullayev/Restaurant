import { CartModal, Header, MenuFood, Products } from "./components";

const App = () => {
  
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex w-full h-full">
      <MenuFood />
      <Products />
    
      </div>
      <CartModal />
    </div>
  );
};

export default App;
