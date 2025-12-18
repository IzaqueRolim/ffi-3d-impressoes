import NavBar from "./Componentes/NavBar/NavBar";
import ItemsList from "./Componentes/ItemsList/ItemsList";
import "./App.css";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("Todos");

  return (
    <div className="app">
      <NavBar
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <ItemsList selectedCategory={category} />
    </div>
  );

}

export default App;
