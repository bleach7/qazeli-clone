import { Footer, Header } from "@/components/ui";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
