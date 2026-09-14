import { useState, useEffect } from "react";
import ContentDB from "./ContentDB";

export default function Category() {
  // 🔹 Categorías (label = visual / value = lógica)
  const categories = [
    { label: "All", value: "All" },
    { label: "UX/UI", value: "UX-UI" },
    { label: "WEB", value: "WEB" },
    { label: "Animation", value: "Animation" },
    { label: "VFX", value: "VFX" },
    { label: "Characters", value: "Characters" },
    { label: "ADS", value: "ADS" },
  ];

  // 🔹 Leer categoría desde URL
  const getCategoryFromURL = () => {
    if (typeof window === "undefined") return "All";

    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get("category");

    const validValues = categories.map((c) => c.value);

    return validValues.includes(urlCategory) ? urlCategory : "All";
  };

  const [activeCategory, setActiveCategory] = useState(getCategoryFromURL);

  // 🔹 Cambiar categoría + URL
  const handleCategoryChange = (value) => {
    setActiveCategory(value);

    if (typeof window !== "undefined") {
      const url =
        value === "All"
          ? window.location.pathname
          : `${window.location.pathname}?category=${value}`;

      window.history.pushState({ category: value }, "", url);
    }
  };

  // 🔹 Escuchar back / forward
  useEffect(() => {
    const handlePopState = () => {
      setActiveCategory(getCategoryFromURL());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      <div className="category">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            className={activeCategory === value ? "active" : ""}
            onClick={() => handleCategoryChange(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <ContentDB activeCategory={activeCategory} />
    </>
  );
}
