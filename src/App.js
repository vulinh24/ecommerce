import "./App.css";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./store/CartContext";

function App() {
  return (
    <CartProvider>
      <Layout/>
    </CartProvider>
  )
}

export default App;
