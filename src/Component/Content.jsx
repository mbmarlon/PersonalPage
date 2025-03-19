import React, { useState } from "react";

const Content = ({ activeCategory }) => {
  const items = [
    {
      id: 1,
      category: "Characters",
      title: "Character Image",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
    },
    {
      id: 2,
      category: "Characters",
      title: "biped Rig",
      type: "video",
      path: "/portfolioIMG/Characters/Bipedo Rigg Y Prueba De Animación.mp4",
    },
    {
      id: 3,
      category: "Animation",
      title: "Animation Image",
      type: "video",
      path: "/portfolioIMG/Animation/Reel3D2024MarlonMarin.mp4",
    },
    {
      id: 4,
      category: "UX/UI",
      title: "UX/UI Image",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
    },
    {
      id: 5,
      category: "ADS",
      title: "ADS Image",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
    },
    {
      id: 6,
      category: "WEB",
      title: "WEB Image",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
    },
    {
      id: 7,
      category: "Characters",
      title: "Another Character Image",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
    },
    {
      id: 8,
      category: "Animation",
      title: "Another Animation Image",
      type: "video",
      path: "/portfolioIMG/Animation/Rain Dance 2.mp4",
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
