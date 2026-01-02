import { useEffect, useState } from "react";
import { fetchMenu } from "./api/menu.api";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import DishList from "./components/DishList";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchMenu().then(setMenu);
  }, []);

  const addToCart = () =>
    setCartCount((count) => count + 1);

  const removeFromCart = () =>
    setCartCount((count) => (count > 0 ? count - 1 : 0));

  if (!menu.length) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cartCount} />

      <CategoryTabs
        categories={menu}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />

      <DishList
        dishes={menu[activeIndex].category_dishes}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default Menu;
