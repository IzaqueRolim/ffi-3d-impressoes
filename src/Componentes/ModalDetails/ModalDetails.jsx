import "./ModalDetails.css";
import ButtonWhatsapp from "../ButtonWhatsapp/ButtonWhatsapp";

export default function ModalDetails({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <img src={item.image} alt={item.name} />

        <div className="modal-info">
          <h2>{item.name}</h2>
          <span className="price">R$ {item.price},00</span>

          <p className="category">
            Categoria: <strong>{item.category}</strong>
          </p>

          <p className="description">
            Produto impresso em 3D com excelente acabamento, ideal para
            decoração, presente ou uso funcional.
          </p>

          <ButtonWhatsapp productName={item.name} />
        </div>
      </div>
    </div>
  );
}
