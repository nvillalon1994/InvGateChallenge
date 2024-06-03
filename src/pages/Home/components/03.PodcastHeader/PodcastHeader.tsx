import React, { useState } from "react";
import { cards } from "../../../../mocks";
import { Post } from "../../../../models";
import PostCard from "../02.RecentBloPost/PostCard";
import useFilteredPosts from "../../../../hooks/useFilterPost";
import FiltersTags from "../02.RecentBloPost/Filters";

// Componente para mostrar podcasts
export default function PodcastHeader() {
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Filtrar las tarjetas de podcast según la etiqueta seleccionada
  const filterCard: Post[] = useFilteredPosts(cards, selectedTag);

  return (
    <div className="px-8 md:px-28 2xl:px-48 py-12 flex flex-col gap-5 md:gap-8 bg-[#F5F9FC]">
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <h2 className="text-2xl font-medium">
          Hear Ticket Volume, our podcast of ITSM world
        </h2>
        {/* Componente de filtros de etiquetas */}
        <FiltersTags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
        {/*Tarjetas de podcast filtradas */}
        {filterCard.map((card, index) => (
          <div
            key={index}
            className="fade-up hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Componente de tarjeta de podcast */}
            <PostCard post={card} setSelectedTag={setSelectedTag} />
          </div>
        ))}
      </div>
    </div>
  );
}
