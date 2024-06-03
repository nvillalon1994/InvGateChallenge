import React from "react";
import { Tag } from "../../../../models";

// Componente para mostrar las etiquetas de los posts o podcasts
export default function Tags({
  tags,
  setSelectedTag,
}: {
  tags: Tag[];
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex gap-4">
      {/* Mapeo de las etiquetas */}
      {tags.map((tag: Tag, index: number) => (
        <div
          // Manejo de etiqueta seleccionada
          onClick={() => {
            setSelectedTag(tag.id);
          }}
          key={index}
          // Clases condicionales para estilos basados en la etiqueta
          className={`
            ${tag.id === "design" && "bg-[#F5F9FC] hover:bg-[#D9E6F3] text-[#256BA5]"}
            ${tag.id === "research" && "bg-indigo-50 hover:bg-indigo-100 text-indigo-700"}
            ${tag.id === "presentation" && "bg-pink-50 hover:bg-pink-100 text-pink-700"}
            ${tag.id === "product" && "bg-[#F0F9FF] hover:bg-[#CCE4FF] text-[#026AA2]"}
            ${tag.id === "frameworks" && "bg-orange-50 hover:bg-orange-100 text-orange-800"}
            ${tag.id === "management" && "bg-pink-50 hover:bg-pink-100 text-pink-700"}
            ${tag.id === "leadership" && "bg-[#F5F9FC] hover:bg-[#D9E6F3] text-[#256BA5]"}

            text-sm rounded-lg px-1 text-bold cursor-pointer
          `}
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
}
