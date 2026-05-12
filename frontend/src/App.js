import NavBar from "./Componentes/NavBar/NavBar";
import ItemsList from "./Componentes/ItemsList/ItemsList";
import "./App.css";

import { useEffect, useState } from "react";
import ProductForm from "./Componentes/ProductForm/ProductForm";

function App() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [index,setIndex] = useState(1)

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Carregando produtos...</h1>;
  }

   const handleProductCreated = (product) => {
    setItems((prev) => [...prev, product]);
  };

  return (
    <div className="app">
      <button onClick={()=>setIndex(index==1?2:1)}>Cadastrar</button>
      {index === 1 &&
      <div>
        <NavBar
          items={items}
          selectedCategory={category}
          onSelectCategory={setCategory}
        />
  
        <ItemsList
          items={items}
          selectedCategory={category}
        />
        </div>}
      {
      index === 2 && <ProductForm onProductCreated={
          handleProductCreated
        }
      />
      }
    </div>
  );
}

export default App;
