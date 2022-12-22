import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Cerveza Texcoco"/>
    </div>
  );
}

export default App;
