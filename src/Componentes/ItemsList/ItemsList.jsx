import "./ItemsList.css";
import Item from "../Item/Item.jsx"; 

export default function ItemsList({items,selectedCategory }) {
  const filteredItems =
  selectedCategory === "Todos"
    ? items
    : items.filter(item => item.category === selectedCategory);
  
  return (
    <section className="items-list">
      {filteredItems.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );

}
