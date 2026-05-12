import { useState } from "react";

function ProductForm({ onProductCreated }) {
  const [formData, setFormData] = useState({
  name: "",
  category: "",
  price: "",
  images: [],
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value, files } = e.target;

  // Múltiplas imagens
  if (name === "images") {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(files),
    }));

    return;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);

    // Adiciona todas as imagens
    formData.images.forEach((image) => {
      data.append("images", image);
    });

    console.log(data)

    const response = await fetch(
      "http://localhost:3001/products",
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao cadastrar produto");
    }

    const newProduct = await response.json();

    onProductCreated(newProduct);

    alert("Produto cadastrado!");

    setFormData({
      name: "",
      category: "",
      price: "",
      images: [],
    });

  } catch (error) {
    console.error(error);
    alert("Erro ao cadastrar produto");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Cadastrar Produto</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          value={formData.category}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="file"
          name="images"
          multiple
          onChange={handleChange}
        />
          {formData.images.length > 0 && (
            <div>
              {formData.images.map((image, index) => (
                <p key={index}>
                  Arquivo: {image.name}
                </p>
              ))}
            </div>
          )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            background: "#222",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Cadastrando..."
            : "Cadastrar Produto"}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default ProductForm;