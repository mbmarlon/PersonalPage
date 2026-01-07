import React, { useState, useEffect } from "react";
import Content from "./Content.jsx";
import ContentDB from "./ContentDB.jsx";

const Category = () => {
  // Leer parámetro de la URL actual al iniciar
  const getCategoryFromURL = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlCategory = params.get("category");

      // Validar que la categoría de la URL sea válida
      const validCategories = [
        "All",
        "Characters",
        "VFX",
        "Animation",
        "UX/UI",
        "ADS",
        "WEB",
      ];

      if (urlCategory && validCategories.includes(urlCategory)) {
        return urlCategory;
      }
    }
    return "All";
  };

  const [activeCategory, setActiveCategory] = useState(getCategoryFromURL());

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Actualizar URL sin recargar la página
    if (typeof window !== "undefined") {
      let newUrl;
      if (category === "All") {
        // Si es "All", quitar el parámetro de la URL
        newUrl = window.location.pathname;
      } else {
        newUrl = `${window.location.pathname}?category=${category}`;
      }
      window.history.pushState({ category }, "", newUrl);
    }
  };

  // Escuchar cambios en el historial del navegador
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handlePopState = () => {
        const newCategory = getCategoryFromURL();
        setActiveCategory(newCategory);
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, []);

  const categories = [
    "All",
    "Characters",
    "VFX",
    "Animation",
    "UX/UI",
    "ADS",
    "WEB",
  ];

  // Sincronizar con la URL cuando se carga la página
  useEffect(() => {
    const urlCategory = getCategoryFromURL();
    if (urlCategory !== activeCategory) {
      setActiveCategory(urlCategory);
    }
  }, []);

  return (
    <>
      <div className="category">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ContentDB activeCategory={activeCategory} />
    </>
  );
};

export default Category;
