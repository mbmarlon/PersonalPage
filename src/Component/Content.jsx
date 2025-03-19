import React, { useState } from "react";

const Content = ({ activeCategory }) => {
  const items = [
    { id: 1, category: "Characters", label: "Character Image" },
    { id: 2, category: "VFX", label: "VFX Image" },
    { id: 3, category: "Animation", label: "Animation Image" },
    { id: 4, category: "UX/UI", label: "UX/UI Image" },
    { id: 5, category: "ADS", label: "ADS Image" },
    { id: 6, category: "WEB", label: "WEB Image" },
    { id: 7, category: "Characters", label: "Another Character Image" },
    { id: 8, category: "Animation", label: "Another Animation Image" },
  ];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="image-box">
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
};
export default Content;
