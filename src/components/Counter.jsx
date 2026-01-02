import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = ({ value, onAdd, onRemove }) => {
  return (
    <div className="flex items-center gap-3 bg-green-500 text-white px-3 py-1 rounded-full w-fit">
      <FaMinus size={12} onClick={onRemove} />
      <span>{value}</span>
      <FaPlus size={12} onClick={onAdd} />
    </div>
  );
};

export default Counter;
