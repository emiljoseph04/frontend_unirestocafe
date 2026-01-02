import DishCard from "./DishCard";

const DishList = ({ dishes, onAdd, onRemove }) => {
  return (
    <div className="p-4 space-y-4">
      {dishes.map((dish) => (
        <DishCard
          key={dish.dish_id}
          dish={dish}
          onAddToCart={onAdd}
          onRemoveFromCart={onRemove}
        />
      ))}
    </div>
  );
};

export default DishList;
