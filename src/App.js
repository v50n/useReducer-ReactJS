import { ShoppingCartProvider } from "./context";
import Counter from "./Counter";
import Panier from "./panier";
import ShoppingList from "./ShoppingList";



function App() {

  return (
    <div className="App">
      <Counter />
      <br/>
      <ShoppingCartProvider>
        <Panier />
        <ShoppingList />
      </ShoppingCartProvider>
      
    </div>
  );
}

export default App;
