import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}
