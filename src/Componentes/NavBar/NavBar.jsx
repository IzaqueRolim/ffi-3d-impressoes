import "./NavBar.css";
import logo from "../../assets/logo-ffi.png";
  
export default function NavBar({items, selectedCategory, onSelectCategory }) {
  const categories = ["Todos",...new Set(items.map(item => item.category))];
  return (
    <header className="navbar">
      <img src={logo} alt="Fantástica Fábrica" className="logo" />

      <p className="description">
        Bem-vindo à <strong>Fantástica Fábrica de Impressões 3D</strong>,<br />
        sua loja especializada na criação de produtos impressos em 3D sob medida.
      </p>

      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </header>
  );
}
