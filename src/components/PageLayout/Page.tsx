import { ReactNode } from "react";
import NavegationBar from "../NavegationBar/NavegationBar";

interface PageProps {
  children?: ReactNode;
}

// Componente de página que incluye una barra de navegación
export default function Page({ children }: PageProps) {
  return (
    // Contenedor de la página
    <div className="w-full overflow-hidden relative pt-20">
      {/* Barra de navegación */}
      <NavegationBar />
      {/* Contenido de la página */}
      {children}
    </div>
  );
}