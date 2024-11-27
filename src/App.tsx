import Cart from "./components/Cart";
import CategoriesDrawer from "./components/CategoriesDrawer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsPage from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <ProductsPage />
      <Cart />
      <CategoriesDrawer />
      <Footer />
    </>
  );
}

export default App;
