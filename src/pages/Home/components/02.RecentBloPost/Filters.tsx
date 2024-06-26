import React from "react";

// Componente para filtrar etiquetas
export default function FiltersTags({
  selectedTag,
  setSelectedTag,
}: {
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      className={`flex gap-2  ${
        selectedTag !== "" ? "opacity-100 " : "opacity-0 "
      } transition-all duration-1000`}
    >
      {/* Botón para quitar todas las etiquetas y mostrar todos los posts o podcast */}
      <div
        className="text-sm rounded-lg px-1 text-bold cursor-pointer hover:bg-[#E4F2FF] bg-[#F5F9FC] text-[#256BA5]"
        onClick={() => {
          setSelectedTag("");
        }}
      >
        See All
      </div>
      {/* Etiqueta seleccionada */}
      <div className="text-sm rounded-lg px-1 text-bold cursor-pointer bg-[#F5F9FC] text-[#256BA5]">
        {selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)}
      </div>
    </div>
  );
}
