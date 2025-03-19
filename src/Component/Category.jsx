import React, { useState } from "react";
import Content from "./Content.jsx";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Characters",
    "VFX",
    "Animation",
    "UX/UI",
    "ADS",
    "WEB",
  ];

  return (
    <>
      <div className="category">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Content activeCategory={activeCategory} />
    </>
  );
};
export default Category;
