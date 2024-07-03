import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContext";
import Routes from "./routes/routes";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </>
  );
}

export default App;
