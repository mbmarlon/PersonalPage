import React, { useState } from "react";

const Content = ({ activeCategory }) => {
  const items = [
    {
      id: 1,
      category: "Animation",
      title: "Animation Reel",
      type: "video",
      path: "/portfolioIMG/Animation/Reel3D2024MarlonMarin.mp4",
    },
    {
      id: 9,
      category: "VFX",
      title: "VFX Reel",
      type: "video",
      path: "/portfolioIMG/VFX/Reel Vfx 2024.mp4",
    },
    {
      id: 10,
      category: "VFX",
      title: "Gracias por todo",
      type: "video",
      path: "/portfolioIMG/VFX/Rafik - Gracias Por Todo.mp4",
    },
    {
      id: 11,
      category: "VFX",
      title: "Palmeras en el jardín",
      type: "video",
      path: "/portfolioIMG/VFX/Alejandro Saenz - Palmera En El Jardín.mp4",
    },
    {
      id: 2,
      category: "Animation",
      title: "Dancing excercise",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
    },
    {
      id: 3,
      category: "Characters",
      title: "biped Rig",
      type: "video",
      path: "/portfolioIMG/Characters/Bipedo Rigg Y Prueba De Animación.mp4",
    },
    {
      id: 4,
      category: "Character",
      title: "Sculpture process",
      type: "video",
      path: "/portfolioIMG/Characters/Escultura Zombie Estilizado.mp4",
    },
    {
      id: 5,
      category: "Characters",
      title: "Stylized character",
      type: "video",
      path: "/portfolioIMG/Characters/Personaje Estilizado.mp4",
    },
    {
      id: 6,
      category: "Characters",
      title: "Poison process",
      type: "video",
      path: "/portfolioIMG/Characters/Posión Mágica.mp4",
    },
    {
      id: 7,
      category: "Characters",
      title: "radiancee process",
      type: "video",
      path: "/portfolioIMG/Characters/Radiance - Personaje Hollowknite.mp4",
    },
    {
      id: 8,
      category: "Characters",
      title: "Retrofuturistic car",
      type: "video",
      path: "/portfolioIMG/Characters/Vehículo Retrofuturista.mp4",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="PortfItem">
            <div className="">
              <h2>{item.title}</h2>
            </div>
            <video className="video" controls src={item.path}></video>
          </div>
        ))}
      </div>
    </>
  );
};
export default Content;
