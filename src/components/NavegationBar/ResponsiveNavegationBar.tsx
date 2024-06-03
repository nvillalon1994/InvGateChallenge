import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "../../models";

// Componente para la barra de navegación responsive
export default function ResponsiveNavegationBar({
  showMenu,
  links,
}: {
  showMenu: boolean;
  links: NavLink[];
}) {
  return (
    // Contenedor de la barra de navegación responsive
    <div
      className={`bg-white fixed top-16 ${showMenu ? "left-0" : "left-[-4000px]"} transition-all duration-500 w-full h-full z-20 p-5`}
    >
      <div className="relative w-full flex flex-col gap-8">
        <div className="flex flex-col text-2xl w-full items-center">
          {/* Renderizar los enlaces de la barra de navegación */}
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-col justify-center border-y w-full h-full py-4"
            >
              <div className="flex items-center justify-center gap-3 cursor-pointer">
                {/* Nombre del enlace */}
                <span className="text-base lg:text-lg font-medium text-[#687382] leading-6 indent-0.5">
                  {link.name}
                </span>
                {/* Icono de flecha hacia abajo para enlaces de tipo select */}
                {link.type === "select" && (
                  <IoIosArrowDown className="text-base" />
                )}
              </div>
            </div>
          ))}
          {/* Elemento de contacto */}
          <span className="sm:hidden text-base lg:text-lg cursor-pointer font-medium py-4 text-[#687382] leading-6 indent-0.5">
            Contact us
          </span>
          {/* Botón de suscripción */}
          <button className="sm:hidden bg-[#08A1FF] w-full text-base lg:text-lg px-5 py-2 my-2 text-white cursor-pointer rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}