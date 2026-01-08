import { useEffect, useState } from "react";
import { getPosts } from "../firebase/firestore";

export default function ContentDB({ activeCategory }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPosts().then(setItems);
  }, []);

  const filteredItems =
    activeCategory && activeCategory !== "All"
      ? items.filter((i) => i.category === activeCategory)
      : items;

  return (
    <div className="masonry">
      {filteredItems.map((item) => (
        <article key={item.id} className="masonry-item">
          <h3>{item.title}</h3>

          {item.type === "video" && (
            <video
              src={item.path}
              controls
              preload="metadata"
              playsInline
              style={{ width: "100%", height: "auto" }}
            />
          )}

          {item.type === "img" && (
            <img
              src={item.path}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
          )}

          {item.type === "pdf" && (
            <a href={item.path} target="_blank" rel="noopener noreferrer">
              Ver PDF
            </a>
          )}

          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          )}
        </article>
      ))}
    </div>
  );
}