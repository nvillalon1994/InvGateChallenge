import React from "react";
import { Post } from "../../../../models";
import Tags from "./Tags";

// Componente para mostrar una card mas pequeña y con otra disposicion de los elementos de posts o podcast
export default function PostCardSmall({
  post,
  setSelectedTag,
}: {
  post: Post;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex h-full justify-between gap-6">
      {/* Imagen de la publicación */}
      <div className="w-3/5 max-w-[60%] overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt=""
          className="h-full object-cover hover:scale-110 transition-all duration-1000"
        />
      </div>

      {/* Contenido de la publicación */}
      <div className="w-2/5 flex flex-col gap-4">
       
        <p className="text-[#256BA5] text-sm">{post.author}</p>
        <div className="space-y">
         
          <h3 className="text-lg font-semibold">{post.heading}</h3>
         
          <p className="text-neutral-500">{post.excerpt}</p>
        </div>
        {/* Etiquetas */}
        <Tags tags={post.tags} setSelectedTag={setSelectedTag} />
      </div>
    </div>
  );
}
