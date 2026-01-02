import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between">
      <div className="flex items-center gap-3">
        <FaArrowLeft className="block md:hidden text-gray-700 cursor-pointer"/>
        <h1 className="font-semibold">UNI Resto Cafe</h1>
      </div>
       <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">My Orders</span>
        <div className="relative cursor-pointer">
          <FaShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
