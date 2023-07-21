import React from "react";

function CategoryFilter({ categories, categoryIndex, onSelectedButtonChange }) {
  const buttons = categories.map((category, index) => {
    const selectedClass =
      categoryIndex === index ? { className: "selected" } : {};
    return (
      <button
        {...selectedClass}
        key={category}
        onClick={() => onSelectedButtonChange(index)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
