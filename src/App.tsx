import { CartProvider } from "./contexts/CartContext/CartContext";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContext";
import Routes from "./routes/routes";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
