import { FixedContacts, Footer, Header } from "@/components/ui";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-auto flex-col">
        <Outlet />
      </main>
      <FixedContacts />
      <Footer />
    </>
  );
};
