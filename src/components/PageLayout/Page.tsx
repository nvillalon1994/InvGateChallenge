import { ReactNode } from "react";
import NavegationBar from "../NavegationBar/NavegationBar";

interface PageProps {
  children?: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="w-full overflow-hidden relative pt-20">
      <NavegationBar />
      {children}
    </div>
  );
}
