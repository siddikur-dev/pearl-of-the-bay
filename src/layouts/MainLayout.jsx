import { Outlet } from "react-router";
import NavBar from "../Pages/shared/NavBar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
