import "./NavBar.css";
import logo from "../../assets/logo-ffi.png";
import { collection, getDocs, query } from "firebase/firestore"; // Importe deleteDoc e doc
import { db } from "../../firebaseConfig.js";

const q = query(collection(db, "items"));

const snapshot = await getDocs(q);
const list = snapshot.docs.map((doc) => ({
    docId: doc.id, 
    id: doc.data().id, 
    name:doc.data().name,
    category:doc.data().category,
    price:doc.data().price,
    image:doc.data().image
}));
const categories = ["Todos",...new Set(list.map(item => item.category))];


export default function NavBar({ selectedCategory, onSelectCategory }) {
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
