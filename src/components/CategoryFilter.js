import React from "react";

function CategoryFilter({ categories, buttonState, onSelectedButtonChange }) {
  const buttons = categories.map((category) => {
    const active = buttonState[category];
    if (active) {
      return (
        <button
          className="selected"
          key={category}
          onClick={() => onSelectedButtonChange(category)}
        >
          {category}
        </button>
      );
    } else {
      return (
        <button key={category} onClick={() => onSelectedButtonChange(category)}>
          {category}
        </button>
      );
    }
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
