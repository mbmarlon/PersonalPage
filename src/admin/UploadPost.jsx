import { useState } from "react";
import { createPost } from "../firebase/firestore";
import useUpload from "../hooks/useUpload";

export default function Post() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("ADS");
  const [file, setFile] = useState(null);

  const { upload, uploading } = useUpload();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const path = `portfolio/${category}/${Date.now()}-${file.name}`;
    const url = await upload(file, path);

    await createPost({
      title,
      category,
      type: file.type.startsWith("video") ? "video" : "img",
      path: url,
    });

    setTitle("");
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>ADS</option>
        <option>Animation</option>
        <option>VFX</option>
      </select>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button disabled={uploading}>
        {uploading ? "Subiendo..." : "Publicar"}
      </button>
    </form>
  );
}
