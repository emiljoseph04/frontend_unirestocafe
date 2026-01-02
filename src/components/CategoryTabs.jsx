import React from "react";

function CategoryTabs({ categories, activeIndex, onChange }) {
  return (
    <div className="bg-white border-b overflow-x-auto">
      <div className="flex gap-6 px-4">
        {categories.map((cat, index) => (
          <button
            key={cat.menu_category_id}
            onClick={() => onChange(index)}
            className={`pb-3 whitespace-nowrap ${
              activeIndex === index
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500"
            }`}
          >
            {cat.menu_category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
