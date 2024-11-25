import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsPage from "./components/Products";

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Cart />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
