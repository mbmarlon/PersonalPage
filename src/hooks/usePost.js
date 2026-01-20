import { useEffect, useState } from "react";
import { getPosts } from "../firebase/firestore";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
}
