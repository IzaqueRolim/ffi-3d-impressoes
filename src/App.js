import NavBar from "./Componentes/NavBar/NavBar";
import ItemsList from "./Componentes/ItemsList/ItemsList";
import "./App.css";
import { useState } from "react";

import BonecoRena from './assets/BonecoRena.jpg'
import SuporteCelularCoracao from './assets/SuporteCelularCoracao.jpg'
import SuporteCelularCachorro from './assets/SuporteCelularCachorro.jpg'
import PortaLapisKombi from './assets/PortaLapisKombi.jpg'
import PortaLapisRoupas from './assets/PortaLapisRoupas.jpg'
import LetreiroReligioso from './assets/LetreiroReligioso.jpg'
import LetreiroDRALiliana from './assets/LetreiroDRALiliana.jpg'
import LetreiroFelizNatal from './assets/LetreiroFelizNatal.jpg'
import ChaveiroCoracaoMinecraft from './assets/ChaveiroCoracaoMinecraft.jpg'
import ChaveiroArma from './assets/ChaveiroArma.jpeg'
import ChaveiroFlor from './assets/ChaveiroFlor.jpeg'
import ChaveiroPokebola from './assets/ChaveiroPokebola.jpeg'

const items = [
  { id: 1, name: "Boneco Pinguin de Natal", category:"Natal", price: 80, image: "https://static.wikia.nocookie.net/tsrd/images/a/ac/Dragao_Vermelho.jpg/revision/latest/scale-to-width-down/1600?cb=20160207215222&path-prefix=pt-br" },
  { id: 2, name: "Boneco de Neve de Natal",category:"Natal", price: 65, image: "https://m.media-amazon.com/images/I/51VksNSYYSL._AC_UF894,1000_QL80_.jpg" },
  { id: 3, name: "Flocos de Neve",category:"Natal", price: 55, image: "https://m.media-amazon.com/images/I/71qqZBWU52L._AC_UF894,1000_QL80_.jpg" },
  { id: 4, name: "Porta Lapis Kombi",category:"Porta Lapis", price: 50, image:PortaLapisKombi },
  { id: 5, name: "Porta Lapis Roupas",category:"Porta Lapis", price: 50, image: PortaLapisRoupas },
  { id: 6, name: "Suporte Celular Cadeira Gamer",category:"Suportes Celular", price: 50, image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/ariane-6.jpg?w=1024" },
  { id: 7, name: "Suporte Celular Robo",category:"Suportes Celular", price: 50, image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/ariane-6.jpg?w=1024" },
  { id: 8, name: "Letreiro Religioso",category:"Letreiro", price: 50, image: LetreiroReligioso },
  { id: 9, name: "Letreiro Cantinho do Café",category:"Letreiro", price: 50, image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/ariane-6.jpg?w=1024" },
  { id: 10, name: "Boneco Rena Natal",category:"Natal", price: 50, image: BonecoRena },
  { id: 11, name: "Suporte Celular Coração",category:"Suportes Celular", price: 30, image: SuporteCelularCoracao },
  { id: 12, name: "Suporte Celular Cachorro",category:"Suportes Celular", price: 30, image: SuporteCelularCachorro },
  { id: 13, name: "Letreiro Dentista",category:"Letreiro", price: 30, image: LetreiroDRALiliana },
  { id: 14, name: "Letreiro Feliz Natal",category:"Letreiro", price: 25, image: LetreiroFelizNatal },
  { id: 15, name: "Chaveiro Coração Minecraft",category:"Chaveiro", price: 10, image: ChaveiroCoracaoMinecraft },
  { id: 16, name: "Chaveiro Flor Inicial",category:"Chaveiro", price: 10, image: ChaveiroFlor },
  { id: 17, name: "Chaveiro Pistola",category:"Chaveiro", price: 10, image: ChaveiroArma },
  { id: 18, name: "Chaveiro Metralhadora",category:"Chaveiro", price: 10, image: ChaveiroArma },
  { id: 18, name: "Chaveiro Pokebola",category:"Chaveiro", price: 10, image: ChaveiroPokebola },
  { id: 20, name: "Quadro Botafogo",category:"Futebol", price: 30, image: ChaveiroCoracaoMinecraft },
  { id: 21, name: "Quadro Vasco",category:"Futebol", price: 30, image: ChaveiroCoracaoMinecraft },
  { id: 22, name: "Quadro Flamengo",category:"Futebol", price: 30, image: ChaveiroCoracaoMinecraft },
  { id: 23, name: "Quadro Homem de Ferro",category:"Quadro", price: 30, image: ChaveiroCoracaoMinecraft },
  { id: 24, name: "Quadro Superman",category:"Quadro", price: 30, image: ChaveiroCoracaoMinecraft },
  { id: 25, name: "Quadro Batman",category:"Quadro", price: 30, image: ChaveiroCoracaoMinecraft },
  { id: 26, name: "Quadro Homem Aranha",category:"Quadro", price: 30, image: ChaveiroCoracaoMinecraft },
];

function App() {
  const [category, setCategory] = useState("Todos");

  return (
    <div className="app">
      <NavBar
        items={items}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <ItemsList items={items} selectedCategory={category} />
    </div>
  );

}

export default App;
