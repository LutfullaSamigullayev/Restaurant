import { Header, MenuFood, Products } from "./components";

const App = () => {
  
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex w-full h-full">
      <MenuFood />
      <Products />
    
      </div>
    </div>
  );
};

export default App;
