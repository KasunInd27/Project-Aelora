import { Outlet } from "react-router";  // IGNORE: updated import path
import Navigation from "@/components/Navigation/Navigation";

export const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
