import { useState, useEffect } from "react";
import { Post, Tag } from "../models";

// Custom hook para filtrar los posts o podcast basado en una etiqueta
const useFilteredPosts = (posts: Post[], filterTag: string): Post[] => {
  // Estado para almacenar los posts o podcast filtrados
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  // Efecto para actualizar los posts filtrados cuando cambia la etiqueta de filtro
  useEffect(() => {
    // Si no hay etiqueta de filtro, mostrar todos los posts
    if (!filterTag) {
      setFilteredPosts(posts);
    } else {
      // Filtrar los posts que contienen la etiqueta especificada
      const filtered = posts.filter((post) =>
        post.tags.some((tag: Tag) =>
          tag.id.toLowerCase().includes(filterTag.toLowerCase())
        )
      );
      // Actualizar los posts filtrados
      setFilteredPosts(filtered);
    }
  }, [posts, filterTag]); // Dependencias del efecto

  return filteredPosts;
};

export default useFilteredPosts;