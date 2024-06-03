import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { posts } from "../../../../mocks";
import { Post } from "../../../../models";
import Loading from "./Loading";

// Componente para mostrar los resultados de la búsqueda
export default function ResultsSearch({
  searchValue,
}: {
  searchValue: string;
}) {
  // Estado para almacenar los resultados de la búsqueda
  const [results, setResults] = useState<Post[]>([]);
  // Estado para controlar el estado de carga
  const [loading, setLoading] = useState<boolean>(true);

  // Función para filtrar las publicaciones según el término de búsqueda
  const filterPosts = (searchValue: string) => {
    const filterPosts: Post[] = posts.filter((item) =>
      item.heading.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setResults([...filterPosts]);
  };

  // Función debounce para retrasar la ejecución de la búsqueda mientras que se este escribiendo
  const delayedSearch = useCallback(
    debounce((q: string) => {
      setLoading(false);
      setResults([]);
      filterPosts(q);
    }, 500),
    []
  );

  // Efecto para realizar la búsqueda cada vez que cambie el término de búsqueda
  useEffect(() => {
    setLoading(true);
    delayedSearch(searchValue);
  }, [searchValue]);

  return (
    <div
      className={`${
        searchValue.length === 0 ? "hidden" : "flex"
      } md:py-20 py-10 w-full flex flex-col justify-center items-center`}
    >
      {/* Mostrar componente de carga si loading es true */}
      {loading ? (
        <Loading />
      ) : results.length === 0 ? ( // Mostrar mensaje si no se encontraron resultados
        <p className="font-semibold">
          No se encontraron resultados para "{searchValue}"
        </p>
      ) : (
        // Mostrar resultados
        <div
          className="animate-slide-up grid grid-cols-1 lg:grid-cols-2 gap-10 hover pb-10 cursor-pointer"
         
        >
          {results.map((post: Post, index: number) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row h-full justify-between gap-6 sm:max-h-32"
            >
              <div className="w-full sm:w-1/3">
                
                <img
                  src={post.image}
                  alt=""
                  className="rounded-xl sm:h-full object-cover"
                />
              </div>

              <div className="sm:w-2/3 w-full flex flex-col gap-1">
                
                <p className="text-[#256BA5] text-sm">{post.author}</p>

                <h3 className="text-lg font-semibold">{post.heading}</h3>

                <p className="text-neutral-500 text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
