import "./ButtonWhatsapp.css";

function ButtonWhatsapp({ productName }) {
  const phoneNumber = "5592985376083"; // troque para seu número
  const message = `Olá! Tenho interesse no produto: ${productName}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="button-whatsapp"
    >
      <span className="icon" />
      Comprar
    </a>
  );
}

export default ButtonWhatsapp;
