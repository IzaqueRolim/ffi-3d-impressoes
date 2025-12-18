import "./ItemsList.css";
import Item from "../Item/Item.jsx";
import { collection, addDoc } from "firebase/firestore"; // Importe deleteDoc e doc
import { db } from "../../firebaseConfig.js";

import BonecoRena from '../../assets/BonecoRena.jpg'
import SuporteCelularCoracao from '../../assets/SuporteCelularCoracao.jpg'
import SuporteCelularCachorro from '../../assets/SuporteCelularCachorro.jpg'
import PortaLapisKombi from '../../assets/PortaLapisKombi.jpg'
import PortaLapisRoupas from '../../assets/PortaLapisRoupas.jpg'
import LetreiroReligioso from '../../assets/LetreiroReligioso.jpg'
import LetreiroDRALiliana from '../../assets/LetreiroDRALiliana.jpg'
import LetreiroFelizNatal from '../../assets/LetreiroFelizNatal.jpg'
import ChaveiroCoracaoMinecraft from '../../assets/ChaveiroCoracaoMinecraft.jpg'

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
  { id: 11, name: "Suporte Celular Coração",category:"Suportes Celular", price: 50, image: SuporteCelularCoracao },
  { id: 12, name: "Suporte Celular Cachorro",category:"Suportes Celular", price: 50, image: SuporteCelularCachorro },
  { id: 13, name: "Letreiro Dentista",category:"Letreiro", price: 50, image: LetreiroDRALiliana },
  { id: 14, name: "Letreiro Feliz Natal",category:"Letreiro", price: 50, image: LetreiroFelizNatal },
  { id: 15, name: "Chaveiro Coração Minecraft",category:"Chaveiro", price: 50, image: ChaveiroCoracaoMinecraft },
];

// const q = query(collection(db, "items"));

// const snapshot = await getDocs(q);
// const list = snapshot.docs.map((doc) => ({
//     docId: doc.id, 
//     id: doc.data().id, 
//     name:doc.data().name,
//     category:doc.data().category,
//     price:doc.data().price,
//     image:doc.data().image
// }));
// const categories = [...new Set(list.map(item => item.category))];

  

export default function ItemsList({selectedCategory }) {
    const filteredItems =
    selectedCategory === "Todos"
      ? items
      : items.filter(item => item.category === selectedCategory);

    async function loopRegister(){
      items.forEach((item)=>{
        registerItem(item)
      })
    }
  async function registerItem(item) {
    try {
      const docRef = await addDoc(collection(db, "items"), {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        image: item.image,
        createdAt: new Date()
      });

      console.log("Item registrado com sucesso:", docRef.id);
    } catch (error) {
      console.error("Erro ao registrar item:", error);
    }
  }

  return (
    <section className="items-list">
      {filteredItems.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );

}
