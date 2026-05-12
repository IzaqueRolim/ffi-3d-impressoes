import { useState } from "react";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";
import ModalDetails from "../ModalDetails/ModalDetails";
import "./Item.css";

export default function Item({ name, price, image,category }) {
    
    
    const [open, setOpen] = useState(false);

  const item = { name, price, image, category };


  return (
    <>
        <div className="item">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <span>R$ {price},00</span>
        <button onClick={()=>{setOpen(true)}}>Ver detalhes</button>
        <ButtonWhatsapp productName={name}></ButtonWhatsapp>
        </div>
        <div>
            {open && (
                <ModalDetails
                item={item}
                onClose={() => setOpen(false)}
                />
                )}
        </div>
    </>
  );
}
