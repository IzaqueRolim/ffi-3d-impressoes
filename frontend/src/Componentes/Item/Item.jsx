import { useState } from "react";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";
import ModalDetails from "../ModalDetails/ModalDetails";
import "./Item.css";

export default function Item({ name, price, images,category }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);  
  const item = { name, price, images, category };

  console.log(item)


  return (
    <>
      <div className="item">
        <div style={{display:'flex'}}>
          <button
            style={{ width: "15px" }}
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0 ? item.images.length - 1 : prev - 1
            )
            }
          >
            {"<"}
          </button>

          <img src={item.images[currentImage]?.image} alt={name} />

          <button
            style={{ width: "15px" }}
            onClick={() =>
              setCurrentImage((prev) =>
                prev === item.images.length - 1 ? 0 : prev + 1
            )
          }
          >
            {">"}
          </button>
        </div>

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
