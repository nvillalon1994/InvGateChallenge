import { useState } from "react";
import useFilteredData from "../../../../hooks/useFilterPost";
import { posts } from "../../../../mocks";
import { Post } from "../../../../models";
import PostCard from "./PostCard";
import PostCardSmall from "./PostCardSmall";
import FiltersTags from "./Filters";

// Componente para mostrar los posts recientes
export default function RecentBlogs() {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const filterPosts: Post[] = useFilteredData(posts, selectedTag);
  
  return (
    <>
      <div className="px-4 md:px-14 py-12 flex flex-col gap-5 md:gap-8 animate-slide-up">

        <div className="flex flex-col md:flex-row gap-2 md:items-center ">
          {/* Título y filtros */}
          <h2 className="text-2xl font-medium">Recent blog posts</h2>
          <FiltersTags selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
        </div>

        {filterPosts.length === 0 ? (
          <>No hay elementos con esas condiciones</>
        ) : (
          <>
            <div className="flex h-full gap-8 x ">
              {/* Primer elemento deplegado a la izquierda en pantallas grandes */}
              <div className="flex-1 lg:flex items-center  h-full justify-center hidden hover:-translate-y-2 transition-transform duration-500">
                <PostCard
                  post={filterPosts[0]}
                  setSelectedTag={setSelectedTag}
                />
              </div>
              {/* Elementos situados en la seccion derecha en pantallas grandes */}
              <div className="flex-1 lg:flex flex-col gap-8 hidden  ">
                {filterPosts
                  .slice(1, 3)
                  ?.map((post: Post, index: number) => (
                    <div
                      key={index}
                      className="flex-1 flex items-center justify-center max-h-[50%] h-1/2 gap-8 hover:-translate-y-2 transition-transform duration-500"
                    >
                      <PostCardSmall
                        post={post}
                        setSelectedTag={setSelectedTag}
                      />
                    </div>
                  ))}
              </div>
              {/* Elementos (para dispositivos móviles) */}
              <div className="flex-1 flex flex-col gap-14 md:gap-8 lg:hidden">
                {filterPosts.map((post: Post, index: number) => (
                  <div
                    key={index}
                    className="flex-1 flex items-center justify-center h-1/2 gap-8"
                  >
                    <PostCard post={post} setSelectedTag={setSelectedTag} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
