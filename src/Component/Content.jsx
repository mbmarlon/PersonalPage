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
    {
      id: 12,
      category: "UX/UI",
      title: "App de Gastos",
      type: "img",
      path: "/portfolioIMG/UX-UI/Presentación.webp",
      pdf: "",
    },
    {
      id: 13,
      category: "UX/UI",
      title: "BabyToo",
      type: "img",
      path: "/portfolioIMG/UX-UI/Landing.webp",
      pdf: "",
    },
    {
      id: 15,
      category: "UX/UI",
      title: "CreserFeliz",
      type: "img",
      path: "/portfolioIMG/UX-UI/Creser proyecto.webp",
      pdf: "",
    },
    {
      id: 17,
      category: "UX/UI",
      title: "Mi primer ahorro",
      type: "img",
      path: "/portfolioIMG/UX-UI/Producto financiero para niños.webp",
      pdf: "",
    },
    {
      id: 18,
      category: "ADS",
      title: "Escritorio pared",
      type: "video",
      path: "/portfolioIMG/ADS/Ad 590 - Escritorio De Pared (Michel) 4 5 Suscripción.mp4",
      pdf: "",
    },
    {
      id: 19,
      category: "ADS",
      title: "patada",
      type: "video",
      path: "/portfolioIMG/ADS/Ad 633 -  Shopify  Evergreen - Patada 9 16.mp4",
      pdf: "",
    },
    {
      id: 20,
      category: "ADS",
      title: "dispensador",
      type: "video",
      path: "/portfolioIMG/ADS/Ad Dispensador De Esponja 9 16.mp4",
      pdf: "",
    },
    {
      id: 21,
      category: "WEB",
      title: "AppGastos",
      type: "img",
      path: "/portfolioIMG/WEB/AppGastos.psd.webp",
      link: "https://mmplandegastosreact.netlify.app/",
    },
    {
      id: 22,
      category: "WEB",
      title: "Store",
      type: "img",
      path: "/portfolioIMG/WEB/Store.psd.webp",
      link: "https://mmtiendadeplanetasreact.netlify.app/",
    },
    {
      id: 23,
      category: "WEB",
      title: "Veterinaria",
      type: "img",
      path: "/portfolioIMG/WEB/Veterinaria.psd.webp",
      link: "https://mmcitasdeveterinariareact.netlify.app/",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="grid">
        {[0, 1, 2, 3].map((colIndex) => (
          <div key={colIndex} className="column">
            {filteredItems
              .filter((_, index) => index % 4 === colIndex) // Distribute items across 4 columns
              .map((item) => (
                <div key={item.id} className="">
                  {item.type === "video" && (
                    <video controls src={item.path}></video>
                  )}
                  <a href={item.link} target="_blank">
                    {item.type === "img" && (
                      <img className="img" src={item.path} />
                    )}
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default Content;
