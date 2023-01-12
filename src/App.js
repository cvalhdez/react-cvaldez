import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />

          <Route path="/color/:colorId" element={ <ItemListContainer /> } />

          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />

          <Route path="*" element={ <NotFound /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
